import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Mail, Calendar, CheckCircle, Globe, Eye, Settings, Users, TrendingUp, X
} from 'lucide-react';
import AppBar from '../components/AppBar';

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const userProfile = state?.userData || { name: 'Reader', email: 'you@email.com', country: 'United States' };
  const [showSampleModal, setShowSampleModal] = useState(false);

  const handleViewSample = () => {
    setShowSampleModal(true);
  };

  const handleInviteFriends = () => {
    const message = `Hey! I just signed up for Muba - an AI that reads 1000+ articles and sends me only the top 10 stories that matter to me. It's personalized news without the noise! Check it out: ${window.location.origin}`;
    
    if (navigator.share) {
      // Use native sharing if available (mobile devices)
      navigator.share({
        title: 'Check out Muba - AI-powered personalized news',
        text: message,
        url: window.location.origin
      }).catch(console.error);
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(message).then(() => {
        alert('Invitation message copied to clipboard! Share it with your friends.');
      }).catch(() => {
        // If clipboard API fails, open email
        const emailSubject = encodeURIComponent('Check out Muba - AI-powered personalized news');
        const emailBody = encodeURIComponent(message);
        window.open(`mailto:?subject=${emailSubject}&body=${emailBody}`);
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* App Bar */}
      <AppBar />

      <div className="p-4">
      <div className="max-w-4xl mx-auto">
        {/* <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </button> */}
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            You're All Set!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hi {userProfile.name}! Your personalized news profile is ready. 
            Your curated news digest will be delivered according to your preferred schedule.
          </p>
        </div>

        {/* Profile Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-purple-500" />
            Email Delivery Details
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-800">Delivery Schedule:</span>
                <span className="text-gray-700">Your choice - Daily, Weekly, or Monthly</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-600" />
                <span className="font-semibold text-gray-800">To:</span>
                <span className="text-gray-700">{userProfile.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-800">Country:</span>
                <span className="text-gray-700">{userProfile.country}</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-gray-800">What You'll Get:</span>
                <span className="text-gray-700">Top 10 stories, personalized for you</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-500 to-pink-400 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                <Mail className="w-10 h-10 text-white mb-2" />
                <span className="text-white font-bold text-lg text-center"></span>
              </div>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-500 text-center">
            Your personalized news will be delivered according to your chosen frequency.<br />
            You can update your delivery preferences or unsubscribe anytime.
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl mb-2">�</div>
              <div className="font-bold mb-2">AI Analysis</div>
              <div className="text-sm">Our AI continuously scans 1000+ sources to find stories that match your interests</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold mb-2">Smart Curation</div>
              <div className="text-sm">Only the top 10 most relevant stories are selected for your personalized digest</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl mb-2">�</div>
              <div className="font-bold mb-2">Your Schedule</div>
              <div className="text-sm">Delivered when you want - daily for the latest, weekly for depth, or monthly for trends</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Eye className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Preview Sample Digest</h4>
              <p className="text-gray-600 text-sm mb-4">See what your personalized news digest will look like</p>
              <button 
                onClick={handleViewSample}
                className="text-purple-500 hover:text-purple-600 font-medium"
              >
                View Sample
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Update Preferences</h4>
              <p className="text-gray-600 text-sm mb-4">Change your interests or delivery frequency anytime</p>
              <button 
                onClick={() => navigate('/assessment')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Retake Quiz
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Share with Friends</h4>
              <p className="text-gray-600 text-sm mb-4">Help others get personalized news too</p>
              <button 
                onClick={handleInviteFriends}
                className="text-pink-500 hover:text-pink-600 font-medium transition-colors"
              >
                Invite Friends
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">🚀 Your personalized news experience awaits!</h4>
            <p className="text-gray-600 mb-4">
              Your AI-powered news digest is ready to deliver exactly what matters to you, when you want it. 
              Whether you choose daily updates, weekly deep-dives, or monthly trends - we'll continuously improve 
              your recommendations based on what you read and engage with.
            </p>
            <div className="text-sm text-gray-500">
              Questions? Email us at contact@muba.today
            </div>
          </div>
        </div>
      </div>

      {/* Sample Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center relative">
            <button
              onClick={() => setShowSampleModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Your Personalized Template</h3>
              <p className="text-gray-600 leading-relaxed">
                Muba will create a personalized news template for you according to your interests and preferences. 
                This will be tailored specifically to deliver the content you care about most.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-700 text-center">
                <span className="font-medium">Your custom template will be ready soon based on your assessment responses!</span>
              </div>
            </div>
            
            <button
              onClick={() => setShowSampleModal(false)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-500 hover:to-pink-400 transition-all"
            >
              Got It
            </button>
          </div>
        </div>
      )}

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
                delivered on your schedule - daily, weekly, or monthly. No fluff, just clarity.
              </p>
              <div className="flex space-x-4">
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
                © 2025 . All rights reserved.
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
    </div>
  );
};

export default Confirmation;