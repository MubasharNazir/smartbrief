import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { 
  Mail, Check, Calendar, CheckCircle
} from 'lucide-react';

const EmailCollection = () => {
  const [emailData, setEmailData] = useState({ name: '', email: '', country: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const completeProfileCreation = async () => {
    setLoading(true);
    try {
      // Save to Firestore
      await addDoc(collection(db, "users"), {
        ...emailData,
        timestamp: new Date().toISOString()
      });
      
      // Navigate to confirmation page
      navigate('/confirmation', { state: { userData: emailData } });
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
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
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
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
  );
};

export default EmailCollection;