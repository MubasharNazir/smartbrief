import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Eye, Lock, User, Database, 
  ChevronLeft, Check, Mail, AlertTriangle
} from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Smartbrief</span>
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
                <p className="text-red-700 text-sm">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
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
                  href="mailto:privacy@smartbrief.com"
                  className="flex items-center gap-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">privacy@smartbrief.com</div>
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
    </div>
  );
};

export default PrivacyPolicy;
