import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Target, Eye, Brain, Calendar, Rocket, ChevronRight, Shield, Clock, Heart, Menu, X,
  CheckCircle, Sparkles, Zap, Filter, Star
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [articleCounter, setArticleCounter] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Article counter animation
  useEffect(() => {
    const animateCounter = () => {
      const target = 1000;
      const duration = 3000;
      const startTime = Date.now();
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(target * easeOut);
        
        setArticleCounter(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    };
    
    const timer = setTimeout(animateCounter, 1000);
    return () => clearTimeout(timer);
  }, [animationKey]);

  // Restart animations periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
      setArticleCounter(0);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateX(-3px) translateY(0px); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateX(2px) translateY(-4px); 
            opacity: 1; 
          }
        }
        @keyframes slideUp {
          0% { 
            transform: translateY(15px) scale(0.95); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0px) scale(1); 
            opacity: 1; 
          }
        }
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-30px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
        }
        @keyframes slideInFromRight {
          0% {
            transform: translateX(30px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        @keyframes aiPulse {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.1); 
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes countUp {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slideInFromRight {
          animation: slideInFromRight 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-ai-pulse {
          animation: aiPulse 2s ease-in-out infinite;
        }
        .animate-ripple {
          animation: ripple 2s infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease forwards;
          opacity: 0;
        }
        .animate-particle-float {
          animation: particleFloat 6s infinite linear;
        }
        .animate-counter {
          animation: countUp 3s ease-out;
        }
      `}</style>
      
      {/* App Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            {/* New Logo with muba.today.svg */}
            <img 
              src="/muba.today.svg" 
              alt="Muba.today Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:scale-110"
            />
            
            {/* Previous logo code - commented out
            <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Mail className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-lg font-bold tracking-tight transition-all duration-300 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:from-red-500 group-hover:via-pink-500 group-hover:to-purple-500">Muba</span>
            */}
          </div>
          
          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10">Features</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10">How It Works</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10">Testimonials</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </button>
          </nav>
          
          {/* Get Started Button - Hidden on mobile since it's in mobile menu */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigate('/assessment')}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-purple-500 hover:to-pink-400 transform"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
              >
                Features
              </button>
              <button
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => {
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  navigate('/assessment');
                  setMobileMenuOpen(false);
                }}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center mt-3"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="relative container mx-auto px-4 pt-8 md:pt-12 pb-12 mt-4 md:mt-6">
        {/* Hero Section */}
        <section className="rounded-3xl mb-16 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div className="max-w-2xl">
              {/* Trust indicator */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-700">AI-powered news curation</span>
              </div>
              
              <h1 className="text-slate-900 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6">
                Your news, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"> perfectly curated.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed">
                Your personal AI reads <strong>1000+ articles</strong> and delivers only the 
                <strong> top 10 stories</strong> that match your interests. Choose your frequency: daily, weekly, or monthly.
              </p>
              
              {/* Value proposition cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">10 stories</div>
                  <div className="text-sm text-slate-600">Curated for you</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-pink-500 mb-1">1000+</div>
                  <div className="text-sm text-slate-600">Articles analyzed</div>
                </div>
              </div>

              {/* How it works preview */}
              <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl p-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-700">
                    <span className="font-medium">Take 2-min quiz</span> → 
                    <span className="font-medium"> AI learns your preferences</span> → 
                    <span className="font-medium"> Get personalized briefings</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => navigate('/assessment')}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] text-lg"
                >
                  <Rocket className="w-5 h-5" /> Start My 2-Min Quiz
                </button>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-300 text-slate-800 bg-white hover:bg-slate-50 font-medium"
                >
                  <Eye className="w-5 h-5" /> See How It Works
                </button>
              </div>
              
              <div className="mt-6 text-sm text-slate-500">
                🚀 <strong>Free to start</strong> • No credit card required • 2-minute setup
              </div>
            </div>

            {/* Right media - News Processing Animation */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-sm h-[600px] relative">
                {/* Demo Container - matches exact design */}
                <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-3xl p-1 backdrop-blur-2xl border border-white/20 relative overflow-hidden h-full">
                  <div className="bg-gradient-to-b from-purple-50/10 via-white/10 to-pink-50/10 rounded-3xl p-6 backdrop-blur-2xl h-full relative overflow-hidden flex flex-col">
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                      {[10, 30, 70, 90].map((left, i) => (
                        <div
                          key={`particle-${animationKey}-${i}`}
                          className="absolute w-1 h-1 bg-white/30 rounded-full animate-particle-float"
                          style={{
                            left: `${left}%`,
                            animationDelay: `${i * 2}s`,
                            animationDuration: `${6 + i}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Article Counter - top right */}
                    <div className="absolute top-3 right-3 bg-white/10 px-3 py-1 rounded-full text-white text-xs font-semibold backdrop-blur-lg border border-white/20 z-10">
                      <span className="text-yellow-300 text-sm font-bold">{articleCounter}</span>+ articles
                    </div>

                    {/* Topics Cloud */}
                    <div className="flex-shrink-0 pt-4 pb-4 z-10">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[
                          { icon: '🗳', label: 'Election' },
                          { icon: '📈', label: 'Markets' },
                          { icon: '🌡', label: 'Climate' },
                          { icon: '🚀', label: 'Tech' },
                          { icon: '💻', label: 'AI' },
                          { icon: '🌍', label: 'Startups' },
                          { icon: '⚡', label: 'Trade' },
                          { icon: '🛢', label: 'Energy' }
                        ].map((topic, index) => (
                          <div
                            key={`topic-${animationKey}-${index}`}
                            className="bg-white/15 text-white px-2 py-1 rounded-full text-xs font-medium border border-white/20 opacity-0 translate-y-5 animate-fadeInUp flex items-center gap-1"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animationFillMode: 'forwards'
                            }}
                          >
                            <span className="text-xs">{topic.icon}</span>
                            <span className="text-xs">{topic.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Processing Center */}
                    <div className="flex-1 flex items-center justify-center relative z-10">
                      {/* Processing Rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {[80, 110, 140].map((size, index) => (
                          <div
                            key={index}
                            className="absolute border-2 border-pink-400/30 rounded-full animate-ripple"
                            style={{
                              width: `${size}px`,
                              height: `${size}px`,
                              animationDelay: `${index * 0.5}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* AI Icon with badge */}
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl animate-pulse relative">
                          ✨
                        </div>
                        {/* Small badge */}
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-black rounded-full flex items-center justify-center">
                          <Zap className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </div>

                    {/* Personalized Stories Section */}
                    <div className="flex-shrink-0 bg-white/10 rounded-xl p-4 backdrop-blur-lg border border-white/20 z-10">
                      <div className="text-white font-semibold text-center mb-3 text-sm">
                        Your Personalized Stories
                      </div>
                      
                      {/* Stories List */}
                      <div className="space-y-2">
                        {[
                          { category: 'POLITICS', title: 'Senate Infrastructure Bill', color: 'border-blue-500' },
                          { category: 'FINANCE', title: 'Fed Rate Changes', color: 'border-green-500' },
                          { category: 'TECH', title: 'AI Healthcare Breakthrough', color: 'border-purple-500' }
                        ].map((story, index) => (
                          <div
                            key={`story-${animationKey}-${index}`}
                            className={`bg-white/10 rounded-lg p-3 border-l-4 ${story.color} opacity-0 -translate-x-8 animate-slideInLeft hover:bg-white/15 hover:translate-x-1 transition-all duration-300 cursor-pointer group`}
                            style={{
                              animationDelay: `${3000 + index * 200}ms`,
                              animationFillMode: 'forwards'
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1 min-w-0">
                                <div className="text-white/70 text-xs uppercase tracking-wide mb-1 font-semibold">
                                  ● {story.category}
                                </div>
                                <div className="text-white text-xs font-medium leading-relaxed truncate">
                                  {story.title}
                                </div>
                              </div>
                              <div className="text-white/40 group-hover:text-white/60 transition-colors flex-shrink-0 ml-2">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Show more indicator */}
                      <div className="text-center mt-3">
                        <div className="text-white/60 text-xs">
                          + 7 more stories
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Features */}
        <div id="features" className="text-center mt-50 md:mt-60">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Why Choose Muba?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the features that make Muba the smartest way to stay informed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-24 md:mb-32">
            <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">AI-Powered Curation</h3>
              <p className="text-slate-700 leading-relaxed">Our advanced AI analyzes thousands of sources and selects only the stories that match your unique interests and preferences.</p>
              <div className="mt-6 text-sm text-purple-700 bg-purple-50 rounded-lg px-4 py-2">
                🔥 Saves 2-3 hours per week
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Perfect Timing</h3>
              <p className="text-slate-700 leading-relaxed">Delivered every Monday at 7 AM, giving you the perfect start to your week with everything you need to know.</p>
              <div className="mt-6 text-sm text-pink-700 bg-pink-50 rounded-lg px-4 py-2">
                ⏰ 94% open rate on Mondays
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Zero Fluff</h3>
              <p className="text-slate-700 leading-relaxed">Only the top 10 most relevant stories. No clickbait, no noise, no endless scrolling. Just what matters to you.</p>
              <div className="mt-6 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2">
                🎯 10 stories = 100% relevance
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - Enhanced */}
        <div id="how-it-works" className="bg-white rounded-3xl p-12 text-center mb-24 md:mb-32 border border-slate-200 shadow-sm">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              How Muba Works Its Magic
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your journey to smarter news in just 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">1</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Smart Profiling</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Take our intelligent 5-minute quiz that understands your news DNA better than you do</p>
              <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-pink-600 to-transparent hidden md:block"></div>
            </div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">2</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">AI Analysis</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Our neural network creates your unique news fingerprint from 1000+ data points</p>
              <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-pink-600 to-transparent hidden md:block"></div>
            </div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-red-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">3</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Weekly Curation</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Scan 10,000+ articles from 500+ sources to find your perfect 10 stories</p>
              <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-red-500 to-transparent hidden md:block"></div>
            </div>
            <div>
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">4</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Perfect Delivery</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Monday 7 AM: Your personalized digest lands in your inbox, ready to fuel your week</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white rounded-3xl p-6 md:p-16 border border-slate-200 shadow-sm mb-12">
          <div className="text-4xl md:text-6xl mb-4 md:mb-6">🧠</div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
            Your Smarter News Journey Starts Now
          </h3>
          <p className="text-lg md:text-2xl text-slate-700 mb-6 md:mb-10 max-w-3xl mx-auto">
            Join 12,847 professionals who start their week with perfectly curated news. 
            <span className="text-green-700 font-semibold"> It takes 5 minutes to set up, saves hours every week.</span>
          </p>
          <button
            onClick={() => navigate('/assessment')}
            className="group relative bg-gradient-to-r from-red-500 via-pink-600 to-purple-500 px-8 py-4 md:px-16 md:py-8 rounded-2xl font-bold text-lg md:text-2xl hover:shadow-2xl transition-all transform hover:scale-105 mb-6 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 md:gap-4 text-white">
              <Rocket className="w-6 h-6 md:w-8 md:h-8" />
              Get My Personalized News
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>No spam guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-600" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-600" />
              <span>Free forever</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="text-center mb-24 md:mb-32">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">What Our Readers Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of professionals who've transformed their news experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">SJ</div>
                <div className="ml-3">
                  <div className="font-semibold text-slate-900">Sarah Johnson</div>
                  <div className="text-sm text-slate-600">Marketing Director</div>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-slate-700 text-sm italic">"Finally, news that doesn't waste my time. I actually look forward to Monday mornings now!"</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">MR</div>
                <div className="ml-3">
                  <div className="font-semibold text-slate-900">Mike Rodriguez</div>
                  <div className="text-sm text-slate-600">Tech Entrepreneur</div>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-slate-700 text-sm italic">"Muba saved me 3 hours a week. The AI actually gets what I care about."</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">AL</div>
                <div className="ml-3">
                  <div className="font-semibold text-slate-900">Anna Lee</div>
                  <div className="text-sm text-slate-600">Financial Analyst</div>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-slate-700 text-sm italic">"Best decision I made this year. Now I'm the most informed person in every meeting."</p>
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
                  {/* New Footer Logo with muba.today.svg */}
                  <img 
                    src="/muba.today.svg" 
                    alt="Muba.today Logo" 
                    className="h-6 w-auto"
                  />
                  
                  {/* Previous footer logo code - commented out
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-slate-900">Muba</span>
                  */}
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
                      onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                      className="text-slate-600 hover:text-blue-600 transition-colors text-left"
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                      className="text-slate-600 hover:text-blue-600 transition-colors text-left"
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
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <button 
                    onClick={() => navigate('/terms-of-service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Terms of Service
                  </button>
                  <button 
                    onClick={() => navigate('/cookie-policy')}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
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

export default LandingPage;