import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, Users, Target, Brain, Shield, 
  ChevronLeft, Clock, X
} from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const [showJobModal, setShowJobModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Smartbrief</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Smartbrief</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to solve information overload and help busy professionals 
              stay informed without the noise.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                In today's world, we're drowning in information. Every day, thousands of news articles 
                are published, but only a few truly matter to you. We built Smartbrief to solve this problem.
              </p>
              <p className="text-gray-600 mb-4">
                Our AI-powered platform reads through thousands of articles every week and delivers 
                only the stories that align with your interests and professional needs.
              </p>
              <p className="text-gray-600">
                Think of it as having your own personal research assistant who knows exactly 
                what you care about.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                <Brain className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI-Powered Curation</h3>
                <p className="text-gray-600">
                  Our advanced algorithms analyze your preferences to deliver perfectly tailored content.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Smartbrief by the Numbers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-blue-100">Active Readers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">News Sources Analyzed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">94%</div>
                <div className="text-blue-100">User Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Privacy First</h3>
                <p className="text-gray-600">
                  We never sell your data. Your preferences and reading habits stay private.
                </p>
              </div>
              <div className="text-center">
                <Target className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Relevance</h3>
                <p className="text-gray-600">
                  Every story we send you is carefully selected based on your interests and needs.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Time-Saving</h3>
                <p className="text-gray-600">
                  We save you hours every week by filtering out the noise and delivering only what matters.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're a passionate team of engineers, journalists, and data scientists who believe 
              that staying informed shouldn't be overwhelming.
            </p>
            <div className="bg-blue-50 rounded-2xl p-8">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Join Our Mission</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for talented individuals who share our vision of making 
                news consumption more efficient and meaningful.
              </p>
              <button
                onClick={() => setShowJobModal(true)}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                View Open Positions
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Contact Us
              </button>
              <a
                href="mailto:hello@smartbrief.com"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                hello@smartbrief.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Job Positions Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowJobModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                No Open Positions Currently
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We don't have any job openings at the moment, but we're always growing! 
                Keep an eye on this space - when we have positions available, they'll be posted here.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Want to stay updated?</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Send us your resume at <a href="mailto:careers@smartbrief.com" className="text-blue-600 hover:text-blue-800">careers@smartbrief.com</a> 
                  and we'll reach out when suitable positions become available.
                </p>
              </div>
              
              <button
                onClick={() => setShowJobModal(false)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
