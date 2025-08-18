import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Eye, Lock, User, Database, 
  ChevronLeft, Check, Mail, AlertTriangle
} from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

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
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: December 2024
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Privacy Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Eye className="w-7 h-7 text-blue-500" />
              Privacy at a Glance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Minimal Collection</h3>
                  <p className="text-gray-600 text-sm">We only collect information necessary to provide our service.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Lock className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Secure Storage</h3>
                  <p className="text-gray-600 text-sm">Your data is encrypted and stored securely on protected servers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 mt-1">
                  <User className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Your Control</h3>
                  <p className="text-gray-600 text-sm">You can update, delete, or export your data at any time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-500" />
                1. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Name and email address (when you sign up for our service)</li>
                    <li>Country/location (to personalize news content)</li>
                    <li>News preferences and interests (from your assessment responses)</li>
                    <li>Communication preferences (frequency, topics, format)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Device information (browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, clicks)</li>
                    <li>IP address and general location</li>
                    <li>Email engagement metrics (opens, clicks, unsubscribes)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Delivery</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Curate and personalize your news briefings</li>
                    <li>Send newsletters and updates based on your preferences</li>
                    <li>Improve content recommendations using your feedback</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Communication</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Send important service updates and notifications</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Notify you about new features or changes to our service</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Promotional Communications</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Send you personalized content recommendations based on your interests</li>
                    <li>Notify you about new features that match your preferences</li>
                    <li>Share relevant news topics and trending stories in your areas of interest</li>
                    <li>Invite you to participate in surveys or feedback sessions</li>
                    <li>Promote premium features and service upgrades</li>
                  </ul>
                  <div className="mt-3 p-3 bg-white border border-purple-200 rounded">
                    <p className="text-sm text-purple-800 font-medium">
                      <strong>Important:</strong> We never sell your personal data to third parties. 
                      All promotional communications come directly from Muba and are based on your preferences and usage patterns.
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Improvement</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Analyze usage patterns to improve our service</li>
                    <li>Conduct research and analytics to enhance user experience</li>
                    <li>Test new features and optimize performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-red-800">We Never Sell Your Data</span>
                </div>
                <p className="text-red-700 text-sm mb-2">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
                <p className="text-red-700 text-sm">
                  <strong>However:</strong> We do use your data to send you promotional content and recommendations 
                  that are relevant to your interests, directly from Muba. You can opt out of these communications at any time.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Providers</h3>
                  <p className="text-gray-600">
                    We may share information with trusted service providers who help us deliver our service, 
                    such as email delivery platforms, analytics providers, and cloud storage services. 
                    These providers are bound by strict confidentiality agreements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal Requirements</h3>
                  <p className="text-gray-600">
                    We may disclose information if required by law, court order, or to protect our rights, 
                    property, or safety, or that of our users or the public.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Safeguards</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Industry-standard encryption in transit and at rest</li>
                    <li>Secure cloud infrastructure with regular security updates</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Regular security audits and vulnerability assessments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Operational Safeguards</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Limited access to personal data on a need-to-know basis</li>
                    <li>Employee training on data protection and privacy</li>
                    <li>Incident response procedures for security breaches</li>
                    <li>Regular backups and disaster recovery plans</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights and Choices</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Access and Update</h3>
                  <p className="text-gray-600">
                    You can access, update, or correct your personal information at any time through your account settings 
                    or by contacting us directly.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Portability</h3>
                  <p className="text-gray-600">
                    You can request a copy of your personal data in a structured, machine-readable format 
                    for transfer to another service.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Deletion</h3>
                  <p className="text-gray-600">
                    You can request deletion of your personal data, and we will remove it within 30 days, 
                    except where retention is required by law.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Communication Preferences</h3>
                  <p className="text-gray-600">
                    You can unsubscribe from marketing emails at any time using the unsubscribe link 
                    or by updating your preferences in your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies and Tracking</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We use cookies and similar technologies to enhance your experience and analyze usage patterns.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                    <p className="text-gray-600 text-sm">
                      Required for basic functionality, such as maintaining your session and remembering your preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600 text-sm">
                      Help us understand how you use our service to improve performance and user experience.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  You can control cookie settings through your browser preferences, though some features may not work properly if cookies are disabled.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
              <p className="mb-6">
                If you have questions about this privacy policy or our data practices, 
                we're here to help. Contact our privacy team directly.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="mailto:contact@muba.today"
                  className="flex items-center gap-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">contact@muba.today</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                  <User className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Data Protection Officer</div>
                    <div className="text-blue-100">Available for GDPR inquiries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates Notice */}
            <div className="mt-8 text-center text-gray-600">
              <p className="text-sm">
                This privacy policy may be updated from time to time. We will notify you of any material changes 
                by email or through our service. Continued use of our service after changes constitutes acceptance 
                of the updated policy.
              </p>
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
                © 2024 Muba. All rights reserved.
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

export default PrivacyPolicy;
