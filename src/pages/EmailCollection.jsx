import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { 
  Mail, Check, Calendar, CheckCircle
} from 'lucide-react';

const EmailCollection = () => {
  const [emailData, setEmailData] = useState({ name: '', email: '', country: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  
  // Get assessment answers from navigation state
  const assessmentAnswers = state?.assessmentAnswers || {};

  // Country options (same as before)
const countryOptions = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "India",
  "Japan",
  "Brazil",
  "United Arab Emirates",
  "Singapore",
  "South Korea"
];

  // Function to calculate user's news profile based on assessment answers
  const calculateNewsProfile = () => {
    const scores = {
      politics: 0,
      business: 0,
      technology: 0,
      international: 0,
      science: 0,
      entertainment: 0,
      lifestyle: 0
    };

    const preferences = {
      format: 'summary',
      delivery: 'structured',
      focus: 'balanced',
      timing: 'morning'
    };

    // Process topic selections (most important for news categorization)
    if (assessmentAnswers.news_categories) {
      Object.entries(assessmentAnswers.news_categories).forEach(([category, topics]) => {
        if (scores.hasOwnProperty(category)) {
          scores[category] = topics.length * 10; // High weight for explicit topic selection
        }
      });
    }

    // Normalize scores and determine top interests
    const maxScore = Math.max(...Object.values(scores));
    const normalizedScores = Object.entries(scores)
      .map(([category, score]) => ({
        category,
        score,
        percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
      }))
      .sort((a, b) => b.score - a.score)
      .filter(item => item.score > 0);

    return { interests: normalizedScores, preferences };
  };

  const completeProfileCreation = async () => {
    setLoading(true);
    try {
      const profile = calculateNewsProfile();
      const timestamp = new Date().toISOString();

      // Prepare complete user profile data
      const completeProfile = {
        // Basic user info
        name: emailData.name,
        email: emailData.email,
        country: emailData.country,
        timestamp,
        
        // Assessment data
        profession: assessmentAnswers.profession || [],
        hobbies: assessmentAnswers.hobbies || [],
        news_consumption: assessmentAnswers.news_consumption || [],
        news_priorities: assessmentAnswers.news_priorities || [],
        reading_behavior: assessmentAnswers.reading_behavior || [],
        
        // Calculated profile
        primary_interests: profile.interests.slice(0, 3).map(i => i.category).join(', '),
        all_interest_scores: profile.interests,
        content_format: profile.preferences.format,
        delivery_style: profile.preferences.delivery,
        geographic_focus: profile.preferences.focus,
        selected_topics: assessmentAnswers.news_categories || {},
        
        // Raw data
        raw_answers: assessmentAnswers,
        
        // Metadata
        created_at: new Date(),
        status: 'active'
      };

      // Save complete user profile to 'user-profiles' collection
      await addDoc(collection(db, "user-profiles"), completeProfile);
      
      // Save just email info to separate 'email-subscribers' collection
      await addDoc(collection(db, "email-subscribers"), {
        name: emailData.name,
        email: emailData.email,
        country: emailData.country,
        timestamp,
        subscription_status: 'active',
        created_at: new Date(),
        
        // News topics for email segmentation
        selected_topics: assessmentAnswers.news_categories || {},
        
        // Flatten topics for easier querying
        topic_categories: Object.keys(assessmentAnswers.news_categories || {}),
        all_selected_topics: Object.values(assessmentAnswers.news_categories || {}).flat(),
        
        // Primary interests for quick filtering
        primary_interests: profile.interests.slice(0, 3).map(i => i.category)
      });

      console.log('Profile saved successfully:', completeProfile);
      
      // Navigate to confirmation page with complete profile data
      navigate('/confirmation', { 
        state: { 
          userData: emailData,
          userProfile: { ...profile, userData: emailData }
        } 
      });
      
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      {/* App Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <img 
              src="/muba.today.svg" 
              alt="Muba.today Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Almost Done! 🎉</h2>
            <p className="text-gray-600 text-lg">
              We've analyzed your preferences. Now let's set up your weekly news delivery.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-blue-800 mb-3">📧 What You'll Receive:</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Top 10 personalized news stories every Monday at 7 AM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Stories curated from the past week based on your interests</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Brief summaries with links to full articles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Easy unsubscribe anytime</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What should we call you? *
              </label>
              <input
                type="text"
                value={emailData.name}
                onChange={(e) => setEmailData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your first name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email address *
              </label>
              <input
                type="email"
                value={emailData.email}
                onChange={(e) => setEmailData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                We'll only use this to send your weekly news digest. No spam, ever.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country *
              </label>
              <select
                value={emailData.country}
                onChange={(e) => setEmailData(prev => ({ ...prev, country: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countryOptions.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-2">
                Your weekly news will be delivered every Monday at 7:00 AM in your country's local time zone.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Delivery Schedule</span>
              </div>
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Every Monday at 7:00 AM</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Top 10 stories from the past week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Personalized to your interests</span>
                </div>
              </div>
            </div>

            <button
              onClick={completeProfileCreation}
              disabled={!emailData.name || !emailData.email || !emailData.country || loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 hover:from-purple-500 hover:to-pink-400"
            >
              {loading ? 'Processing...' : 'Start My Weekly News 🚀'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By clicking "Start My Weekly News", you agree to receive weekly email updates. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/muba.today.svg" 
                  alt="Muba.today Logo" 
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-slate-600 mb-4 max-w-md">
                Your AI-powered news companion. Get the top 10 stories that matter to you, 
                delivered every Monday morning. No fluff, just clarity.
              </p>
              <div className="flex space-x-4">
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    How It Works
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigate('/about')} 
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/contact')} 
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-600 text-sm mb-4 md:mb-0">
                © 2024 Muba. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <button 
                  onClick={() => navigate('/privacy-policy')} 
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => navigate('/terms-of-service')}
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => navigate('/cookie-policy')}
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmailCollection;