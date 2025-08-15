import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

const SampleIssue = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-3xl mx-auto">
        {/* <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </button> */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Mail className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Sample Monday Morning NewsIQ Issue
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Here's what your personalized Monday morning email could look like.<br />
            <span className="text-purple-600 font-semibold">15 stories. 5 minutes. 100% relevance.</span>
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="text-sm text-gray-500 mb-1">From: mubasharoneview@gmail.com</div>
            <div className="text-sm text-gray-500 mb-1">To: you@email.com</div>
            <div className="text-lg font-bold">📰 Your Top 15 News Stories - Week of August 12, 2025</div>
          </div>
          <div className="bg-white rounded p-4 border-l-4 border-purple-500 mb-6">
            <div className="font-bold text-purple-800 mb-2">Good morning, Reader! ☀️</div>
            <div className="text-gray-700 text-sm">
              Here are your top stories this week, curated just for you by NewsIQ's AI.<br />
              <span className="text-purple-700 font-semibold">Categories: Technology, Business, Science, World, Lifestyle</span>
            </div>
          </div>
          <div className="space-y-4">
            {/* Sample stories would go here */}
          </div>
          <div className="text-center text-gray-500 text-sm py-6">
            <span className="font-semibold text-purple-700">NewsIQ</span> — Your week, perfectly curated.<br />
            <span className="italic">Want this in your inbox? <span className="underline cursor-pointer text-purple-600" onClick={() => navigate('/assessment')}>Build your profile now</span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleIssue;