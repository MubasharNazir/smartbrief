import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Target, Eye, Brain, Calendar, Rocket, ChevronRight, Shield, Clock, Heart, Menu, X
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
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
                  navigate('/sample-issue');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
              >
                Sample Issue
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

      <div className="relative container mx-auto px-4 pt-32 md:pt-40 pb-12 mt-15 md:mt-20">
        {/* Hero Section */}
        <section className="rounded-3xl mb-16 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div className="max-w-2xl">
              <h1 className="text-slate-900 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6">
          Imagine your own AI agent,
              </h1>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                that reads 1,000 news articles and tells you only what matters to you
              </h2>
              <p className="text-lg md:text-xl text-slate-700 mb-8">
                {/* Get a Monday-morning brief of the top 10 stories tailored to your interests. No fluff. No noise. Just what matters to you. */}
                {/* Imagine your own AI agent, that reads 1,000 news articles and tells you only what matters to you. */}
              </p>
              <div className="text-sm text-slate-600 mb-3">
                Where your week is understood — Get Muba.
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => navigate('/assessment')}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Target className="w-5 h-5" /> Build My News Profile
                </button>
                <button
                  onClick={() => navigate('/sample-issue')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-800 bg-white hover:bg-slate-50"
                >
                  <Eye className="w-5 h-5" /> See Sample Issue
                </button>
              </div>
            </div>

            {/* Right media */}
            <div className="relative">
              <div className="mx-auto w-full max-w-md rounded-3xl p-[3px] bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg">
                <div className="rounded-3xl bg-white relative">
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl flex items-center justify-center animate-pulse z-10">
                    <div className="text-purple-400">
                      <Brain className="w-16 h-16 animate-bounce" />
                    </div>
                  </div>
                  
                  {/* Optimized image with modern formats */}
                  <picture>
                    <source srcSet="/ai2.png" type="image/webp" />
                    <img
                      src="/ai2.png"
                      alt="Muba preview"
                      className="w-full h-auto object-contain rounded-3xl relative z-20"
                      loading="eager"
                      decoding="async"
                      onLoad={(e) => {
                        e.target.style.opacity = '1';
                        // Hide loading placeholder
                        const placeholder = e.target.parentElement.querySelector('.animate-pulse');
                        if (placeholder) placeholder.style.display = 'none';
                      }}
                      onError={(e) => {
                        console.log('Image failed to load');
                        // Hide loading placeholder on error too
                        const placeholder = e.target.parentElement.querySelector('.animate-pulse');
                        if (placeholder) placeholder.style.display = 'none';
                      }}
                      style={{
                        opacity: '0',
                        transition: 'opacity 0.5s ease-in-out'
                      }}
                    />
                  </picture>
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
        <div className="text-center bg-white rounded-3xl p-16 border border-slate-200 shadow-sm mb-12">
          <div className="text-6xl mb-6">🧠</div>
          <h3 className="text-5xl font-bold mb-6 text-slate-900">
            Your Smarter News Journey Starts Now
          </h3>
          <p className="text-2xl text-slate-700 mb-10 max-w-3xl mx-auto">
            Join 12,847 professionals who start their week with perfectly curated news. 
            <span className="text-green-700 font-semibold"> It takes 5 minutes to set up, saves hours every week.</span>
          </p>
          <button
            onClick={() => navigate('/assessment')}
            className="group relative bg-gradient-to-r from-red-500 via-pink-600 to-purple-500 px-16 py-8 rounded-2xl font-bold text-2xl hover:shadow-2xl transition-all transform hover:scale-105 mb-6 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4 text-white">
              <Rocket className="w-8 h-8" />
              Build My Muba Profile
              <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          <div className="flex justify-center items-center gap-8 text-sm text-slate-600">
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
                  © 2024 NewsIQ. All rights reserved.
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