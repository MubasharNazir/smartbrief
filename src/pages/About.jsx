import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Brain, Clock, X, ChevronLeft } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const [showJobModal, setShowJobModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <img 
              src="/muba.today.svg" 
              alt="Muba.today Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:scale-110"
            />
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In today's fast-paced world, staying informed shouldn't mean drowning in information. 
              We believe that every professional deserves access to curated, relevant news that 
              enhances their decision-making without consuming their entire day.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Our AI algorithms analyze thousands of sources to deliver personalized briefings 
              that match your interests, industry, and reading preferences.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Precision Curation</h3>
              <p className="text-gray-600">AI-powered algorithms that learn your preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Smart Insights</h3>
              <p className="text-gray-600">Context and analysis, not just headlines</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Time Efficient</h3>
              <p className="text-gray-600">Get informed in minutes, not hours</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
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
              <h3 className="font-bold text-gray-800 mb-2">Mubashar Nazir</h3>
              <p className="text-purple-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former journalist with 10+ years in media. Passionate about democratizing access to quality journalism.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SK</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Sarah Kim</h3>
              <p className="text-purple-600 font-medium mb-3">Head of AI</p>
              <p className="text-gray-600 text-sm">
                PhD in Machine Learning. Previously led AI initiatives at top tech companies.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">DR</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">David Rodriguez</h3>
              <p className="text-purple-600 font-medium mb-3">Editorial Director</p>
              <p className="text-gray-600 text-sm">
                Award-winning editor with expertise in news curation and content strategy.
              </p>
            </div>
          </div>
        </div>

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
                  href="mailto:mubasharoneview@gmail.com"
                  className="text-purple-600 font-semibold hover:text-purple-700"
                >
                  mubasharoneview@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
