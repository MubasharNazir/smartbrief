import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Target, Eye, Brain, Calendar, Rocket, ChevronRight, Shield, Clock,
  CheckCircle, Sparkles, Zap, Star
} from 'lucide-react';
import AppBar from '../components/AppBar';

const LandingPage = () => {
  const navigate = useNavigate();
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
      <AppBar />

      <div className="relative container mx-auto px-6 pt-8 md:pt-12 pb-12 mt-4 md:mt-6 max-w-7xl">
        {/* Hero Section */}
        <section className="mb-24 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">10 stories</div>
                  <div className="text-sm text-slate-600">Curated for you</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-pink-500 mb-1">1000+</div>
                  <div className="text-sm text-slate-600">Articles analyzed</div>
                </div>
              </div>

              {/* How it works preview */}
              <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl p-4 mb-8 border border-slate-100">
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
                  <Rocket className="w-5 h-5" /> Get Personalized News
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

        {/* Features Section */}
        <section id="features" className="mb-24 md:mb-32">
          <div className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 rounded-3xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>
            
            <div className="relative px-6 md:px-12 py-16 md:py-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-6 py-3 mb-8">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Why Choose Muba?</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">News Experience</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Discover the features that make Muba the smartest way to stay informed in the digital age
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">AI-Powered Curation</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">Our advanced AI analyzes thousands of sources and selects only the stories that match your unique interests and preferences.</p>
                  <div className="inline-flex items-center gap-2 text-sm text-purple-700 bg-purple-50 rounded-full px-4 py-2">
                    <span className="text-lg">🔥</span>
                    <span className="font-semibold">Saves 2-3 hours per week</span>
                  </div>
                </div>
                
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200 hover:border-pink-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Perfect Timing</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">Delivered on your schedule - daily, weekly, or monthly. Choose what works best for your lifestyle and stay perfectly informed.</p>
                  <div className="inline-flex items-center gap-2 text-sm text-pink-700 bg-pink-50 rounded-full px-4 py-2">
                    <span className="text-lg">⏰</span>
                    <span className="font-semibold">Your schedule, your choice</span>
                  </div>
                </div>
                
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Zero Fluff</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">Only the top 10 most relevant stories. No clickbait, no noise, no endless scrolling. Just what matters to you.</p>
                  <div className="inline-flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 rounded-full px-4 py-2">
                    <span className="text-lg">🎯</span>
                    <span className="font-semibold">10 stories = 100% relevance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-24 md:mb-32">
          <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative px-6 md:px-12 py-12 md:py-16 text-center">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-white">How It Works</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  How Muba Works Its <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Magic</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Your journey to smarter news consumption in just 4 simple steps
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {[
                  {
                    number: 1,
                    title: "Smart Profiling",
                    description: "Take our intelligent 5-minute quiz that understands your news DNA better than you do",
                    gradient: "from-red-500 to-pink-600",
                    lineColor: "from-pink-600 to-transparent"
                  },
                  {
                    number: 2,
                    title: "AI Analysis", 
                    description: "Our neural network creates your unique news fingerprint from 1000+ data points",
                    gradient: "from-pink-600 to-purple-500",
                    lineColor: "from-purple-500 to-transparent"
                  },
                  {
                    number: 3,
                    title: "Smart Curation",
                    description: "Scan articles from 500+ sources to find your perfect 10 stories based on your interests", 
                    gradient: "from-purple-500 to-blue-500",
                    lineColor: "from-blue-500 to-transparent"
                  },
                  {
                    number: 4,
                    title: "Flexible Delivery",
                    description: "Your personalized digest delivered on your schedule - daily, weekly, or monthly",
                    gradient: "from-blue-500 to-emerald-500",
                    lineColor: ""
                  }
                ].map((step, index) => (
                  <div key={step.number} className="group relative">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                        {step.number}
                      </div>
                      {step.lineColor && (
                        <div className={`absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r ${step.lineColor} hidden md:block`}></div>
                      )}
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-24 md:mb-32">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl"></div>
            
            <div className="relative text-center px-6 md:px-12 py-16 md:py-20">
              {/* Trust indicator */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-300 text-sm font-medium">Trusted by 12,847+ professionals</span>
              </div>
              
              {/* Main headline */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Your Smarter News Journey
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Starts Now</span>
              </h2>
              
              {/* Value proposition */}
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of professionals who get perfectly curated news on their schedule. 
                <span className="text-white font-semibold"> Choose daily, weekly, or monthly delivery. 5 minutes to setup, hours saved.</span>
              </p>
              
              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">5 min</div>
                  <div className="text-xs text-slate-400">Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">10</div>
                  <div className="text-xs text-slate-400">Top Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">Free</div>
                  <div className="text-xs text-slate-400">Forever</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mb-8">
                <button
                  onClick={() => navigate('/assessment')}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Brain className="w-6 h-6" />
                  Get My Personalized News
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>No spam guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>5-minute setup</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>Free forever</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-24 md:mb-32">
          <div className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 rounded-3xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>
            
            <div className="relative text-center px-6 md:px-12 py-12 md:py-16">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 rounded-full px-6 py-3 mb-6">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">Customer Love</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  What Our Readers <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Say</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of professionals who've transformed their news experience
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    initials: "SJ",
                    name: "Sarah Johnson",
                    role: "Marketing Director",
                    quote: "Finally, news that doesn't waste my time. I get exactly what I need when I need it! The AI perfectly understands what matters to me.",
                    gradient: "from-blue-400 to-purple-400",
                    topBorder: "from-blue-400 to-purple-400",
                    quoteBg: "text-blue-100"
                  },
                  {
                    initials: "MR", 
                    name: "Mike Rodriguez",
                    role: "Tech Entrepreneur",
                    quote: "Muba saved me 3 hours a week. The AI actually gets what I care about. Best productivity tool I've discovered this year!",
                    gradient: "from-green-400 to-emerald-400",
                    topBorder: "from-green-400 to-emerald-400", 
                    quoteBg: "text-green-100"
                  },
                  {
                    initials: "AL",
                    name: "Anna Lee", 
                    role: "Financial Analyst",
                    quote: "Best decision I made this year. Now I'm the most informed person in every meeting. The curation quality is incredible!",
                    gradient: "from-purple-400 to-pink-400",
                    topBorder: "from-purple-400 to-pink-400",
                    quoteBg: "text-purple-100"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.topBorder}`}></div>
                    
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {testimonial.initials}
                      </div>
                      <div className="ml-4 text-left">
                        <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                        <div className="text-slate-600">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-slate-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className={`absolute bottom-4 right-4 text-6xl ${testimonial.quoteBg} opacity-50`}>"</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative px-6 md:px-12 py-16 md:py-20">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="/muba.today.svg" 
                    alt="Muba.today Logo" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
                <p className="text-slate-300 mb-6 max-w-md leading-relaxed text-lg">
                  Your AI-powered news companion. Get the top 10 stories that matter to you, 
                  delivered on your schedule - daily, weekly, or monthly. <span className="text-white font-semibold">No fluff, just clarity.</span>
                </p>
                
                <div className="flex space-x-4">
                  {[
                    {
                      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                      gradient: "hover:from-blue-600 hover:to-blue-500"
                    }
                  ].map((social, index) => (
                    <button key={index} className={`group w-12 h-12 bg-slate-800 ${social.gradient} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6 text-lg">Product</h4>
                <ul className="space-y-4">
                  {[
                    { text: "Features", action: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) },
                    { text: "How It Works", action: () => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }
                  ].map((link, index) => (
                    <li key={index}>
                      <button 
                        onClick={link.action}
                        className="text-slate-400 hover:text-white transition-all duration-300 text-left group flex items-center gap-2"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6 text-lg">Company</h4>
                <ul className="space-y-4">
                  {[
                    { text: "About", action: () => navigate('/about') },
                    { text: "Contact", action: () => navigate('/contact') }
                  ].map((link, index) => (
                    <li key={index}>
                      <button 
                        onClick={link.action}
                        className="text-slate-400 hover:text-white transition-all duration-300 text-left group flex items-center gap-2"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-400 text-sm">
                  © 2025 <span className="text-white font-semibold">Muba</span>. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                  {[
                    { text: "Privacy Policy", action: () => navigate('/privacy-policy') },
                    { text: "Terms of Service", action: () => navigate('/terms-of-service') },
                    { text: "Cookie Policy", action: () => navigate('/cookie-policy') }
                  ].map((link, index) => (
                    <button 
                      key={index}
                      onClick={link.action}
                      className="text-slate-400 hover:text-white transition-colors duration-300 hover:underline"
                    >
                      {link.text}
                    </button>
                  ))}
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