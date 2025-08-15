import React from 'react';
import { Database } from 'lucide-react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-purple-200 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
          <div className="absolute top-6 left-6 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Database className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Setting Up Your News Profile...</h3>
        <p className="text-gray-600 mb-6 max-w-md">
          We're analyzing your preferences and preparing your personalized news experience
        </p>
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-purple-300 rounded-full animate-pulse"></div>
              <span>Processing your interest profile</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-purple-300 rounded-full animate-pulse"></div>
              <span>Setting up personalization engine</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-purple-300 rounded-full animate-pulse"></div>
              <span>Saving to database</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-purple-300 rounded-full animate-pulse"></div>
              <span>Scheduling your first Monday email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;