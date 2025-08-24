import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Mail, Send, Eye, Filter, Search, 
  BarChart3, Settings, LogOut, Download,
  ChevronLeft, Plus
} from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc, query, orderBy, addDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('users');
  const [emailTemplate, setEmailTemplate] = useState({
    subject: '',
    content: '',
    stories: [
      { title: '', category: '', summary: '', link: '' },
      { title: '', category: '', summary: '', link: '' },
      { title: '', category: '', summary: '', link: '' },
      { title: '', category: '', summary: '', link: '' },
      { title: '', category: '', summary: '', link: '' }
    ]
  });
  const [sending, setSending] = useState(false);
  const [emailStats] = useState({
    totalSent: 0,
    deliveryRate: 98.5,
    openRate: 65.2,
    clickRate: 23.1
  });
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    country: '',
    interests: []
  });
  const [firebaseDebug, setFirebaseDebug] = useState({
    collections: {},
    error: null
  });

  // Password protection
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const ADMIN_PASSWORD = 'muba2025admin'; // Change this to a secure password

  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
      checkAllCollections(); // Also check all collections when authenticated
    }
  }, [isAuthenticated]);

  const filterUsers = useCallback(() => {
    let filtered = users;
    
    if (searchTerm) {
      filtered = users.filter(user => 
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.interests?.some(interest => 
          interest.category?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    setFilteredUsers(filtered);
  }, [users, searchTerm]);

  useEffect(() => {
    filterUsers();
  }, [filterUsers]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('❌ Invalid password');
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      console.log('🔍 Fetching users from Firebase...');
      console.log('🔧 Firebase config:', {
        projectId: 'newsiq-6d817',
        collection: 'user-profiles'
      });
      
      // Try to fetch from user-profiles collection first
      console.log('📂 Attempting to query user-profiles collection...');
      let usersSnapshot;
      let collectionUsed = 'user-profiles';
      
      try {
        usersSnapshot = await getDocs(
          query(collection(db, 'user-profiles'), orderBy('createdAt', 'desc'))
        );
      } catch (error) {
        console.log('⚠️ Error with user-profiles, trying without orderBy:', error);
        // Try without orderBy in case createdAt field doesn't exist
        usersSnapshot = await getDocs(collection(db, 'user-profiles'));
      }
      
      console.log('📊 user-profiles query result:', {
        empty: usersSnapshot.empty,
        size: usersSnapshot.size,
        docs: usersSnapshot.docs.length
      });
      
      let usersData = [];
      
      if (usersSnapshot.empty) {
        console.log('⚠️ No documents found in user-profiles collection');
        console.log('🔍 Trying email-subscribers collection...');
        
        // Try alternative collection
        try {
          const emailSubsSnapshot = await getDocs(collection(db, 'email-subscribers'));
          console.log('📧 email-subscribers query result:', {
            empty: emailSubsSnapshot.empty,
            size: emailSubsSnapshot.size
          });
          
          if (!emailSubsSnapshot.empty) {
            collectionUsed = 'email-subscribers';
            usersSnapshot = emailSubsSnapshot;
          }
        } catch (altError) {
          console.log('❌ Error checking email-subscribers:', altError);
        }
      }
      
      // Process the documents
      usersData = usersSnapshot.docs.map(doc => {
        const data = doc.data();
        console.log(`👤 User data from ${collectionUsed}:`, data);
        
        // Normalize data structure regardless of source collection
        return {
          id: doc.id,
          name: data.name || 'Unknown',
          email: data.email || 'No email',
          country: data.country || 'Unknown',
          interests: data.interests || data.all_interest_scores || [],
          profession: data.profession || ['Unknown'],
          hobbies: data.hobbies || ['Unknown'],
          primary_interests: data.primary_interests || 'None specified',
          createdAt: data.createdAt?.toDate() || data.created_at?.toDate() || data.timestamp?.toDate() || new Date(),
          lastEmailSent: data.lastEmailSent?.toDate?.() || null,
          source_collection: collectionUsed,
          raw_data: data // Keep raw data for debugging
        };
      });
      
      console.log(`✅ Processed ${usersData.length} users from ${collectionUsed}:`, usersData);
      
      if (usersData.length === 0) {
        console.log('ℹ️ No users found in any collection. You can:');
        console.log('1. Add test users using the button');
        console.log('2. Have real users complete the assessment at:', window.location.origin);
      }
      
      setUsers(usersData);
      setLoading(false);
    } catch (error) {
      console.error('❌ Error fetching users:', error);
      console.error('❌ Error details:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      });
      alert(`Error fetching users: ${error.message}\n\nCheck console for details.`);
      setLoading(false);
    }
  };

  const createTestUsers = async () => {
    const testUsers = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        country: 'United States',
        interests: [
          { category: 'Technology', percentage: 90 },
          { category: 'Business', percentage: 80 },
          { category: 'Politics', percentage: 60 }
        ],
        createdAt: new Date(),
        profession: ['Software Engineer'],
        hobbies: ['Technology', 'Reading'],
        primary_interests: 'Technology, Business, Politics'
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah@example.com', 
        country: 'Canada',
        interests: [
          { category: 'Health', percentage: 95 },
          { category: 'Science', percentage: 85 },
          { category: 'Lifestyle', percentage: 70 }
        ],
        createdAt: new Date(),
        profession: ['Healthcare Professional'],
        hobbies: ['Health', 'Fitness'],
        primary_interests: 'Health, Science, Lifestyle'
      },
      {
        name: 'Mike Chen',
        email: 'mike@example.com',
        country: 'United Kingdom', 
        interests: [
          { category: 'Finance', percentage: 88 },
          { category: 'Business', percentage: 82 },
          { category: 'International', percentage: 75 }
        ],
        createdAt: new Date(),
        profession: ['Finance'],
        hobbies: ['Travel', 'News'],
        primary_interests: 'Finance, Business, International'
      },
      {
        name: 'Emily Rodriguez',
        email: 'emily@example.com',
        country: 'Spain',
        interests: [
          { category: 'Entertainment', percentage: 92 },
          { category: 'Lifestyle', percentage: 78 },
          { category: 'Technology', percentage: 65 }
        ],
        createdAt: new Date(),
        profession: ['Designer'],
        hobbies: ['Art', 'Movies'],
        primary_interests: 'Entertainment, Lifestyle, Technology'
      },
      {
        name: 'Alex Kumar',
        email: 'alex@example.com',
        country: 'India',
        interests: [
          { category: 'Politics', percentage: 89 },
          { category: 'International', percentage: 83 },
          { category: 'Business', percentage: 71 }
        ],
        createdAt: new Date(),
        profession: ['Government'],
        hobbies: ['News', 'Politics'],
        primary_interests: 'Politics, International, Business'
      }
    ];

    try {
      for (const user of testUsers) {
        await addDoc(collection(db, 'user-profiles'), user);
      }
      alert('✅ 5 test users created successfully!');
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error creating test users:', error);
      alert('❌ Error creating test users');
    }
  };

  const checkAllCollections = async () => {
    const collectionNames = ['user-profiles', 'email-subscribers', 'users', 'profiles', 'assessments'];
    const results = {};
    
    console.log('🔍 Checking all Firebase collections...');
    
    for (const collectionName of collectionNames) {
      try {
        console.log(`🔍 Checking collection: ${collectionName}`);
        const snapshot = await getDocs(collection(db, collectionName));
        results[collectionName] = {
          exists: true,
          size: snapshot.size,
          empty: snapshot.empty,
          docs: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        };
        console.log(`✅ ${collectionName}:`, results[collectionName]);
      } catch (error) {
        results[collectionName] = {
          exists: false,
          error: error.message
        };
        console.log(`❌ ${collectionName}:`, error.message);
      }
    }
    
    setFirebaseDebug({ collections: results, error: null });
    return results;
  };

  const sendPersonalizedEmail = async (user, customTemplate = null) => {
    try {
      setSending(true);
      
      const template = customTemplate || emailTemplate;
      
      // Create personalized content
      const personalizedStories = template.stories
        .filter(story => story.title && story.category)
        .map((story, index) => `
          ${index + 1}. ${story.title}
          Category: ${story.category}
          ${story.summary}
          ${story.link ? `Read more: ${story.link}` : ''}
        `).join('\n\n');

      const emailContent = `
Hello ${user.name},

Here are your personalized news stories based on your interests:
${user.interests?.map(interest => interest.category).join(', ')}

${personalizedStories}

Best regards,
The Muba Team

---
This email was sent to ${user.email}
You can unsubscribe at any time by replying to this email.
      `;

      // Send via EmailJS
      const templateParams = {
        name: user.name,
        time: new Date().toLocaleString(),
        message: emailContent,
        to_email: user.email,
        subject: template.subject || `Your Personalized News - ${new Date().toLocaleDateString()}`
      };

      await emailjs.send(
        'service_jbsvsf7',
        'template_d1iiv8m',
        templateParams,
        'YqyF5KFi6-yKQp7Hn'
      );

      // Update user's last email sent
      await updateDoc(doc(db, 'user-profiles', user.id), {
        lastEmailSent: new Date()
      });

      console.log(`✅ Email sent to ${user.email}`);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    } finally {
      setSending(false);
    }
  };

  const sendBulkEmails = async () => {
    if (selectedUsers.length === 0) {
      alert('Please select users to send emails to');
      return;
    }

    if (!emailTemplate.subject || !emailTemplate.stories.some(s => s.title)) {
      alert('Please fill in the email template');
      return;
    }

    setSending(true);
    let successCount = 0;
    let failCount = 0;

    for (const userId of selectedUsers) {
      const user = users.find(u => u.id === userId);
      if (user) {
        try {
          await sendPersonalizedEmail(user);
          successCount++;
          // Add delay between emails to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error(`Failed to send email to ${user.email}:`, error);
          failCount++;
        }
      }
    }

    setSending(false);
    setSelectedUsers([]);
    alert(`✅ Emails sent successfully: ${successCount}\n❌ Failed: ${failCount}`);
    
    // Refresh user data
    fetchUsers();
  };

  const exportUsers = () => {
    const csvContent = [
      ['Name', 'Email', 'Country', 'Interests', 'Created At', 'Last Email Sent'],
      ...users.map(user => [
        user.name || '',
        user.email || '',
        user.country || '',
        user.interests?.map(i => i.category).join('; ') || '',
        user.createdAt?.toLocaleDateString() || '',
        user.lastEmailSent?.toDate?.()?.toLocaleDateString() || 'Never'
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `muba-users-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-slate-300">Enter password to access dashboard</p>
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-400 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Website
              </button>
              <div className="w-px h-6 bg-slate-300"></div>
              <h1 className="text-2xl font-bold text-slate-900">Muba Admin Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-600">
                Welcome, Admin
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen">
          <nav className="p-6">
            <div className="space-y-2">
              {[
                { id: 'users', icon: Users, label: 'Users', count: users.length },
                { id: 'compose', icon: Mail, label: 'Compose Email' },
                { id: 'analytics', icon: BarChart3, label: 'Analytics' },
                { id: 'debug', icon: Settings, label: 'Debug Data' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === item.id
                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.count !== undefined && (
                    <span className="ml-auto bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs">
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'users' && (
            <div className="space-y-6">
              {/* Users Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Users</h2>
                  <p className="text-slate-600">Manage your subscribers and send personalized emails</p>
                </div>
                <div className="flex gap-3">
                  {users.length === 0 && (
                    <button
                      onClick={createTestUsers}
                      className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add 5 Test Users
                    </button>
                  )}
                  <button
                    onClick={exportUsers}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Export CSV
                  </button>
                  {selectedUsers.length > 0 && (
                    <button
                      onClick={sendBulkEmails}
                      disabled={sending}
                      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:to-pink-400 transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      {sending ? 'Sending...' : `Send to ${selectedUsers.length} users`}
                    </button>
                  )}
                </div>
              </div>

              {/* Search and Filters */}
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search users by name, email, country, or interests..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3 text-left">
                          <input
                            type="checkbox"
                            checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedUsers(filteredUsers.map(u => u.id));
                              } else {
                                setSelectedUsers([]);
                              }
                            }}
                            className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                          />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Interests
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Joined
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Last Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              checked={selectedUsers.includes(user.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedUsers([...selectedUsers, user.id]);
                                } else {
                                  setSelectedUsers(selectedUsers.filter(id => id !== user.id));
                                }
                              }}
                              className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium text-slate-900">{user.name}</div>
                              <div className="text-sm text-slate-500">{user.email}</div>
                              <div className="text-xs text-slate-400">{user.country}</div>
                              {user.source_collection && (
                                <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded mt-1 inline-block">
                                  From: {user.source_collection}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {Array.isArray(user.interests) && user.interests.length > 0 ? (
                                <>
                                  {user.interests.slice(0, 3).map((interest, index) => (
                                    <span
                                      key={index}
                                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                                    >
                                      {typeof interest === 'string' ? interest : interest.category || interest.name || 'Interest'}
                                    </span>
                                  ))}
                                  {user.interests.length > 3 && (
                                    <span className="text-xs text-slate-500">
                                      +{user.interests.length - 3} more
                                    </span>
                                  )}
                                </>
                              ) : user.primary_interests ? (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {user.primary_interests}
                                </span>
                              ) : (
                                <span className="text-xs text-slate-400">No interests specified</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500">
                            {user.createdAt?.toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500">
                            {user.lastEmailSent?.toDate?.()?.toLocaleDateString() || 'Never'}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => sendPersonalizedEmail(user)}
                                disabled={sending}
                                className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm disabled:opacity-50"
                              >
                                <Send className="w-3 h-3" />
                                Send
                              </button>
                              <button className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm">
                                <Eye className="w-3 h-3" />
                                View
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredUsers.length === 0 && (
                  <div className="p-8 text-center">
                    <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    {users.length === 0 ? (
                      <div>
                        <p className="text-slate-500 text-lg mb-4">No real users found!</p>
                        <p className="text-slate-400 mb-6">
                          Real users will appear here after they complete the assessment.
                          <br />
                          Check the Debug Data tab to see Firebase connection status.
                        </p>
                        <div className="space-y-3">
                          <button
                            onClick={createTestUsers}
                            className="block mx-auto px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                          >
                            ➕ Add 5 Test Users
                          </button>
                          <p className="text-xs text-slate-400">
                            Or share your website: <span className="font-mono bg-slate-100 px-2 py-1 rounded">{window.location.origin}</span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-500">No users match your search</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'compose' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Compose Email</h2>
                <p className="text-slate-600">Create personalized news emails for your users</p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-6">
                {/* Email Subject */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Your Daily News Brief - March 15, 2025"
                    value={emailTemplate.subject}
                    onChange={(e) => setEmailTemplate({...emailTemplate, subject: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-400"
                  />
                </div>

                {/* News Stories */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-4">
                    Top News Stories (Fill in the stories you want to send)
                  </label>
                  
                  <div className="space-y-4">
                    {emailTemplate.stories.map((story, index) => (
                      <div key={index} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-slate-900">Story #{index + 1}</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-slate-500 mb-1">Title</label>
                            <input
                              type="text"
                              placeholder="Breaking: Major News Event..."
                              value={story.title}
                              onChange={(e) => {
                                const newStories = [...emailTemplate.stories];
                                newStories[index].title = e.target.value;
                                setEmailTemplate({...emailTemplate, stories: newStories});
                              }}
                              className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-purple-400"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-xs font-medium text-slate-500 mb-1">Category</label>
                            <select
                              value={story.category}
                              onChange={(e) => {
                                const newStories = [...emailTemplate.stories];
                                newStories[index].category = e.target.value;
                                setEmailTemplate({...emailTemplate, stories: newStories});
                              }}
                              className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-purple-400"
                            >
                              <option value="">Select category...</option>
                              <option value="POLITICS">Politics</option>
                              <option value="BUSINESS">Business</option>
                              <option value="TECHNOLOGY">Technology</option>
                              <option value="HEALTH">Health</option>
                              <option value="SPORTS">Sports</option>
                              <option value="ENTERTAINMENT">Entertainment</option>
                              <option value="SCIENCE">Science</option>
                              <option value="WORLD">World News</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <label className="block text-xs font-medium text-slate-500 mb-1">Summary</label>
                          <textarea
                            placeholder="Brief summary of the news story..."
                            value={story.summary}
                            onChange={(e) => {
                              const newStories = [...emailTemplate.stories];
                              newStories[index].summary = e.target.value;
                              setEmailTemplate({...emailTemplate, stories: newStories});
                            }}
                            rows={2}
                            className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-purple-400"
                          />
                        </div>
                        
                        <div className="mt-3">
                          <label className="block text-xs font-medium text-slate-500 mb-1">Link (Optional)</label>
                          <input
                            type="url"
                            placeholder="https://example.com/article"
                            value={story.link}
                            onChange={(e) => {
                              const newStories = [...emailTemplate.stories];
                              newStories[index].link = e.target.value;
                              setEmailTemplate({...emailTemplate, stories: newStories});
                            }}
                            className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-purple-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview and Send */}
                <div className="flex gap-4 pt-6 border-t border-slate-200">
                  <button
                    onClick={() => setActiveTab('users')}
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:to-pink-400 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Go to Users to Send
                  </button>
                  
                  <button className="flex items-center gap-2 px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                    <Eye className="w-4 h-4" />
                    Preview Email
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Analytics</h2>
                <p className="text-slate-600">Track your email performance and user engagement</p>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    label: 'Total Users',
                    value: users.length,
                    icon: Users,
                    color: 'from-blue-500 to-blue-600',
                    change: '+12%'
                  },
                  {
                    label: 'Emails Sent',
                    value: emailStats.totalSent,
                    icon: Mail,
                    color: 'from-green-500 to-green-600',
                    change: '+23%'
                  },
                  {
                    label: 'Open Rate',
                    value: `${emailStats.openRate}%`,
                    icon: Eye,
                    color: 'from-purple-500 to-purple-600',
                    change: '+5%'
                  },
                  {
                    label: 'Click Rate',
                    value: `${emailStats.clickRate}%`,
                    icon: BarChart3,
                    color: 'from-pink-500 to-pink-600',
                    change: '+8%'
                  }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                        <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                        <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interest Distribution */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Popular Interest Categories</h3>
                <div className="space-y-4">
                  {Object.entries(
                    users.reduce((acc, user) => {
                      user.interests?.forEach(interest => {
                        acc[interest.category] = (acc[interest.category] || 0) + 1;
                      });
                      return acc;
                    }, {})
                  )
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 10)
                    .map(([category, count]) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-slate-700">{category}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                              style={{ width: `${(count / users.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm text-slate-600 w-8">{count}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'debug' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Debug Data</h2>
                <p className="text-slate-600">View raw Firebase data and troubleshoot issues</p>
              </div>

              {/* Firebase Connection Status */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Firebase Connection</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-green-800 font-medium">✅ Connection Status</div>
                    <div className="text-green-600 text-sm">Connected to Firebase</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-blue-800 font-medium">📊 Collection</div>
                    <div className="text-blue-600 text-sm font-mono">user-profiles</div>
                  </div>
                </div>
              </div>

              {/* Raw User Data */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">Firebase Collections Debug</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={checkAllCollections}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      🔍 Check All Collections
                    </button>
                    <button
                      onClick={fetchUsers}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      🔄 Refresh Users
                    </button>
                  </div>
                </div>

                {/* Collection Results */}
                {Object.keys(firebaseDebug.collections).length > 0 && (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-3">Collection Scan Results:</h4>
                    <div className="space-y-2">
                      {Object.entries(firebaseDebug.collections).map(([name, info]) => (
                        <div key={name} className="flex items-center justify-between p-2 bg-white rounded border">
                          <span className="font-mono text-sm">{name}</span>
                          {info.exists ? (
                            <div className="text-sm">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
                                ✅ {info.size} documents
                              </span>
                              {info.size > 0 && (
                                <button
                                  onClick={() => console.log(`${name} docs:`, info.docs)}
                                  className="text-blue-600 hover:underline text-xs"
                                >
                                  View in Console
                                </button>
                              )}
                            </div>
                          ) : (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                              ❌ {info.error}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {users.length === 0 ? (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="text-yellow-800 font-medium">⚠️ No Data Found</div>
                    <div className="text-yellow-700 text-sm mt-2">
                      No users found in the 'user-profiles' collection. This could mean:
                    </div>
                    <ul className="text-yellow-700 text-sm mt-2 ml-4 list-disc">
                      <li>No users have completed the assessment yet</li>
                      <li>Firebase rules might be blocking read access</li>
                      <li>Collection name might be different</li>
                    </ul>
                    <div className="mt-4">
                      <button
                        onClick={createTestUsers}
                        className="px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                      >
                        Create Test Users
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {users.map((user, index) => (
                      <div key={user.id} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">User #{index + 1}</h4>
                          <span className="text-xs text-slate-500 font-mono">{user.id}</span>
                        </div>
                        <div className="bg-slate-50 rounded p-3 overflow-auto">
                          <pre className="text-xs text-slate-700 whitespace-pre-wrap">
                            {JSON.stringify(user, null, 2)}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 How to Get Real User Data</h3>
                <div className="space-y-2 text-blue-800 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>Share your website URL: <span className="font-mono bg-white px-2 py-1 rounded">{window.location.origin}</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>Users click "Get My Personalized News" and complete the assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>Users enter their email and details</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold">4.</span>
                    <span>Data automatically appears in this dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
