import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { 
  Mail, Send, Clock, 
  ChevronLeft, MessageCircle, HelpCircle, Users,
  Plus, Minus
} from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save contact form data to Firebase
      await addDoc(collection(db, "contact-submissions"), {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'new', // For admin tracking
        userAgent: navigator.userAgent,
        submittedAt: new Date()
      });

      // Show success message
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error saving contact form:', error);
      alert('Sorry, there was an error sending your message. Please try again or email us directly at contact@muba.today');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            {/* Same Logo as Hero Section */}
            <img 
              src="/muba.today.svg" 
              alt="Muba.today Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:scale-110 cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>
          
          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <button 
              onClick={() => navigate('/')}
              className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-slate-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-purple-600 font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"></div>
            </button>
          </nav>
          
          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigate('/assessment')}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-purple-500 hover:to-pink-400 transform"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile menu would go here */}
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, feedback, or need help? We're here to assist you. 
            Reach out and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div id="contact-form" className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What can we help you with? *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Product Feedback</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-green-800">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold">Message sent successfully!</span>
                  </div>
                  <p className="text-green-700 text-sm mt-2">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@muba.today"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-purple-100">contact@muba.today</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <Clock className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-purple-100">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Categories */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">How can we help?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <HelpCircle className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">General Questions</h4>
                    <p className="text-gray-600 text-sm">Questions about our service, pricing, or how to get started.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Technical Support</h4>
                    <p className="text-gray-600 text-sm">Help with account issues, email delivery, or technical problems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <Users className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Partnership Inquiries</h4>
                    <p className="text-gray-600 text-sm">Interested in partnering with us or integrating our service?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need Quick Answers?</h3>
              <p className="text-gray-600 mb-6">
                Check out our FAQ section for instant answers to common questions.
              </p>
              <button 
                onClick={() => document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Other Ways to Reach Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600 text-sm mb-3">For technical help and account issues</p>
              <a href="mailto:contact@muba.today" className="text-purple-500 font-medium">
                contact@muba.today
              </a>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Partnerships</h3>
              <p className="text-gray-600 text-sm mb-3">For business and partnership inquiries</p>
              <a href="mailto:contact@muba.today" className="text-green-500 font-medium">
                contact@muba.today
              </a>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Press</h3>
              <p className="text-gray-600 text-sm mb-3">For media and press inquiries</p>
              <a href="mailto:contact@muba.today" className="text-purple-500 font-medium">
                contact@muba.today
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-section" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions about Muba</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is Muba?",
                answer: "Muba is an AI-powered news profiling platform that curates personalized news briefings based on your interests and preferences. Our advanced algorithms analyze your reading patterns to deliver the most relevant news content."
              },
              {
                question: "How does the AI personalization work?",
                answer: "Our AI analyzes your reading behavior, topic preferences, and engagement patterns to create a unique news profile. The more you use Muba, the better it becomes at understanding your interests and delivering relevant content."
              },
              {
                question: "Is Muba free to use?",
                answer: "Yes, Muba offers a free tier with basic personalization features. We also offer premium plans with advanced analytics, unlimited briefings, and priority support for users who want more comprehensive news analysis."
              },
              {
                question: "How often are news briefings updated?",
                answer: "News briefings are updated in real-time throughout the day. You can choose to receive notifications for breaking news or set a preferred schedule for your daily briefings (morning, afternoon, or evening)."
              },
              {
                question: "Can I customize my news sources?",
                answer: "Absolutely! You can select from over 10,000 trusted news sources worldwide. Choose specific publications, exclude sources you don't want, and even set regional preferences to get news that matters most to you."
              },
              {
                question: "How do I get started?",
                answer: "Getting started is simple! Click the \"Take Assessment\" button on our homepage to complete a quick 5-minute questionnaire about your interests. Our AI will immediately start creating your personalized news profile."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never sell your data to third parties, and you can delete your account and all associated data at any time. Read our Privacy Policy for more details."
              },
              {
                question: "Can I use Muba on mobile devices?",
                answer: "Yes! Muba is fully responsive and works perfectly on all devices - desktop, tablet, and mobile. We also have mobile apps for iOS and Android coming soon for an even better mobile experience."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <h3 className="text-xl font-bold text-gray-800 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-6 h-6 text-purple-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Contact Support
              </button>
            </div>
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

export default Contact;
