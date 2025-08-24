import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Check, AlertTriangle, Mail, Scale } from 'lucide-react';
import AppBar from '../components/AppBar';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* App Bar */}
      <AppBar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 mb-4">
              Please read these terms carefully before using Muba
            </p>
            <p className="text-sm text-gray-500">
              Last updated: August 14, 2025
            </p>
          </div>
        </div>

        {/* Terms Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
          <div className="flex items-start mb-4">
            <Check className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Terms Summary</h3>
              <p className="text-blue-800">
                By using Muba, you agree to our terms. We provide AI-powered news curation services, 
                and you're responsible for using our platform appropriately.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                By accessing and using Muba ("Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of our website located at muba.today 
                (the "Service") operated by Muba ("us", "we", or "our").
              </p>
            </div>
          </div>

          {/* Use License */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Permission is granted to temporarily access Muba for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on Muba</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </div>

          {/* User Accounts */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Accounts</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                You are responsible for safeguarding the password and for maintaining the confidentiality of your account.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware 
                of any breach of security or unauthorized use of your account.
              </p>
            </div>
          </div>

          {/* Content and Conduct */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Content and Conduct</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our Service allows you to access curated news content. You understand that all information, data, text, 
                or other materials ("Content") are the sole responsibility of the person from whom such Content originated.
              </p>
              <p>
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload, post, or transmit any Content that is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property 
                of Muba and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </div>
          </div>

          {/* Data Usage and Privacy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Usage and Privacy</h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Our Data Promise</h3>
                <p className="text-green-700">
                  We <strong>never sell your personal data</strong> to third parties. Your information is used solely to improve your experience and provide you with relevant content.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">How We Use Your Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personalizing your news feed based on your preferences</li>
                  <li>Sending you newsletters and updates about topics you're interested in</li>
                  <li>Promoting relevant features, content, and services within Muba</li>
                  <li>Analyzing usage patterns to improve our service quality</li>
                  <li>Communicating with you about your account and service updates</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Promotional Communications</h3>
                <p className="text-blue-700">
                  By using our service, you consent to receive promotional communications from us about new features, 
                  relevant content recommendations, and service improvements. You can opt out of promotional emails at any time 
                  through your account settings or unsubscribe links.
                </p>
              </div>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                to understand our complete data practices.
              </p>
              <button
                onClick={() => navigate('/privacy-policy')}
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                View Privacy Policy
              </button>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever and without limitation.
              </p>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-amber-600 mr-3" />
              9. Disclaimer
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company excludes all representations, warranties, conditions and terms relating to this website and the use of this website.
              </p>
              <p>
                Muba shall not be held liable for any damages arising from the use of this Service.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium text-gray-800 mb-2">Muba Support</p>
                <p>Email: <a href="mailto:contact@muba.today" className="text-blue-600 hover:text-blue-800">contact@muba.today</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
              </div>
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

export default TermsOfService;
