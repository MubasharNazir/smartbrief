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
              Questions? Email us at mubasharoneview@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;