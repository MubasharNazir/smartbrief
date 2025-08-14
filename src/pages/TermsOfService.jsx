import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, Check, AlertTriangle, Mail, Scale } from 'lucide-react';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mr-4"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 mb-4">
              Please read these terms carefully before using SmartBrief
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
                By using SmartBrief, you agree to our terms. We provide AI-powered news curation services, 
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
                By accessing and using SmartBrief ("Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of our website located at smartbrief.com 
                (the "Service") operated by SmartBrief ("us", "we", or "our").
              </p>
            </div>
          </div>

          {/* Use License */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Permission is granted to temporarily access SmartBrief for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on SmartBrief</li>
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
                of SmartBrief and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Privacy Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                to understand our practices.
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Termination</h2>
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
              8. Disclaimer
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company excludes all representations, warranties, conditions and terms relating to this website and the use of this website.
              </p>
              <p>
                SmartBrief shall not be held liable for any damages arising from the use of this Service.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to Terms</h2>
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
                <p className="font-medium text-gray-800 mb-2">SmartBrief Support</p>
                <p>Email: <a href="mailto:legal@smartbrief.com" className="text-blue-600 hover:text-blue-800">legal@smartbrief.com</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
