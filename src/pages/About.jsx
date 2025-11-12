import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Brain, Clock, X } from 'lucide-react';
import AppBar from '../components/AppBar';

const About = () => {
  const navigate = useNavigate();
  const [showJobModal, setShowJobModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <AppBar />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">About Muba</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how professionals consume news. Our AI-powered platform 
            delivers personalized, intelligent briefings that keep you informed without overwhelming you.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl text-white p-12 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-purple-100">Active Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-purple-100">News Sources Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold">98%</div>
              <div className="text-purple-100">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-purple-100">AI Monitoring</div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In today's fast-paced world, staying informed shouldn't mean drowning in information. 
              We believe that every professional deserves access to curated, relevant news that 
              enhances their decision-making without consuming their entire day.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our AI algorithms analyze thousands of sources to deliver personalized briefings 
              that match your interests, industry, and reading preferences.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Precision Curation</h3>
                  <p className="text-gray-600">AI-powered algorithms that learn your preferences</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 rounded-full p-3">
                  <Brain className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Smart Insights</h3>
                  <p className="text-gray-600">Context and analysis, not just headlines</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Time Efficient</h3>
                  <p className="text-gray-600">Get informed in minutes, not hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            We're a diverse team of journalists, technologists, and data scientists united 
            by our passion for making information more accessible and actionable.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MN</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Mubashar</h3>
              <p className="text-purple-600 font-medium mb-3">Founder</p>
              <p className="text-gray-600 text-sm">
                Former journalist with 10+ years in media. Passionate about democratizing access to quality journalism.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MD</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Mudassar</h3>
              <p className="text-purple-600 font-medium mb-3">CEO</p>
              <p className="text-gray-600 text-sm">
                PhD in Machine Learning. Previously led AI initiatives at top tech companies.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MW</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Mussawar</h3>
              <p className="text-purple-600 font-medium mb-3">Advisor</p>
              <p className="text-gray-600 text-sm">
                Award-winning editor with expertise in news curation and content strategy.
              </p>
            </div>
          </div>
        </div> */}

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to shape the future of news consumption. 
            From AI engineers to content strategists, we have exciting opportunities.
          </p>
          <button
            onClick={() => setShowJobModal(true)}
            className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-colors"
          >
            View Open Positions
          </button>
        </div>
      </div>

      {/* Job Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">Open Positions</h3>
              <button
                onClick={() => setShowJobModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Senior AI Engineer</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Lead the development of our recommendation algorithms and natural language processing systems.
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded">Python</span>
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded">TensorFlow</span>
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded">NLP</span>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Content Strategist</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Shape our editorial voice and develop content strategies that resonate with our audience.
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded">Editorial</span>
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded">Strategy</span>
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded">Analytics</span>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend Developer</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Create beautiful, responsive interfaces that make news consumption delightful.
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Design</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Interested in joining our team? Send your resume and cover letter to:
                </p>
                <a
                  href="mailto:contact@muba.today"
                  className="text-purple-600 font-semibold hover:text-purple-700"
                >
                  contact@muba.today
                </a>
              </div>
            </div>
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
                © 2025 Muba. All rights reserved.
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

export default About;
