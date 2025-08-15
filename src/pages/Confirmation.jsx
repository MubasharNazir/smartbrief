import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Mail, Calendar, CheckCircle, Globe, Eye, Settings, Users, TrendingUp
} from 'lucide-react';

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const userProfile = state?.userData || { name: 'Reader', email: 'you@email.com', country: 'United States' };

  return (
    <div className="min-h-screen bg-white p-4">
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
            Welcome to Monday Morning News! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hi {userProfile.name}! Your personalized news profile is ready. 
            Your first email will arrive this Monday at 7 AM.
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
                <span className="font-semibold text-gray-800">Delivery Time:</span>
                <span className="text-gray-700">Every Monday at 7:00 AM</span>
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
            Your personalized news will arrive in your inbox every Monday morning.<br />
            You can update your preferences or unsubscribe anytime.
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-bold mb-2">This Weekend</div>
              <div className="text-sm">Our AI will scan hundreds of news sources from the past week</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl mb-2">🤖</div>
              <div className="font-bold mb-2">Monday Morning</div>
              <div className="text-sm">Your personalized top 10 stories will be selected and sent at 7 AM</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-bold mb-2">Every Week</div>
              <div className="text-sm">Content gets more personalized as we learn your reading preferences</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Eye className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Preview Sample Email</h4>
              <p className="text-gray-600 text-sm mb-4">See what your Monday email will look like</p>
              <button 
                onClick={() => navigate('/sample-issue')}
                className="text-purple-500 hover:text-purple-600 font-medium"
              >
                View Sample
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Update Preferences</h4>
              <p className="text-gray-600 text-sm mb-4">Change your interests anytime</p>
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
              <button className="text-pink-500 hover:text-pink-600 font-medium">
                Invite Friends
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">🚀 Ready to get even better news?</h4>
            <p className="text-gray-600 mb-4">
              Your personalized news experience starts this Monday. We'll continuously improve 
              your recommendations based on what you read and engage with.
            </p>
            <div className="text-sm text-gray-500">
              Questions? Email us at contact@muba.today
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
                © 2024 NewsIQ. All rights reserved.
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

export default Confirmation;