import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => handleNavigation('/')}>
          <img 
            src="/muba.today.svg" 
            alt="Muba.today Logo" 
            className="h-8 w-auto transition-all duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => handleNavigation('/')}
            className={`font-medium transition-all duration-300 relative group ${
              location.pathname === '/' 
                ? 'text-purple-600' 
                : 'text-slate-700 hover:text-purple-600'
            }`}
          >
            <span className="relative z-10">Home</span>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 ${
              location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
          >
            <span className="relative z-10">Features</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
          >
            <span className="relative z-10">How It Works</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
          >
            <span className="relative z-10">Testimonials</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </button>
        </nav>
        
        {/* Get Started Button - Hidden on mobile since it's in mobile menu */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavigation('/assessment')}
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
              onClick={() => handleNavigation('/')}
              className={`block w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-slate-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium"
            >
              Contact Us
            </button>
            <button
              onClick={() => handleNavigation('/assessment')}
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center mt-3"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppBar;
