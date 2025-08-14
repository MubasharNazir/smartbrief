import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Cookie, Shield, Settings, Eye, AlertTriangle, Mail } from 'lucide-react';

const CookiePolicy = () => {
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
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-600 mb-4">
              Learn about how SmartBrief uses cookies to improve your experience
            </p>
            <p className="text-sm text-gray-500">
              Last updated: August 14, 2025
            </p>
          </div>
        </div>

        {/* Cookie Summary */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 mb-8">
          <div className="flex items-start mb-4">
            <Cookie className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">What are Cookies?</h3>
              <p className="text-orange-800">
                Cookies are small text files stored on your device that help us provide you with a better, 
                more personalized experience on SmartBrief.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Content */}
        <div className="space-y-8">
          {/* What are Cookies */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Cookie className="w-6 h-6 text-orange-600 mr-3" />
              1. What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p>
                Cookies help us understand how you use SmartBrief, remember your preferences, and provide you with 
                a more personalized news experience.
              </p>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Settings className="w-6 h-6 text-blue-600 mr-3" />
              2. Types of Cookies We Use
            </h2>
            <div className="space-y-6 text-gray-600">
              
              {/* Essential Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  Essential Cookies
                </h3>
                <p className="mb-3">
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They enable core functionality such as security, network management, and accessibility.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Authentication, security, load balancing
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Settings className="w-5 h-5 text-blue-600 mr-2" />
                  Functional Cookies
                </h3>
                <p className="mb-3">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences 
                  and providing personalized content.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Language settings, news preferences, theme choices
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Eye className="w-5 h-5 text-purple-600 mr-2" />
                  Analytics Cookies
                </h3>
                <p className="mb-3">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Google Analytics, usage statistics, performance monitoring
                </div>
              </div>

              {/* Advertising Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                  Advertising Cookies
                </h3>
                <p className="mb-3">
                  These cookies are used to deliver advertisements that are more relevant to you and your interests. 
                  They may be set by us or by third-party providers.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Targeted ads, retargeting, social media advertising
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Third-Party Cookies</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Some cookies on our site are set by third-party services that appear on our pages. We use the following third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> To understand how users interact with our website</li>
                <li><strong>Firebase:</strong> For user authentication and data storage</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                <li><strong>Content Delivery Networks:</strong> For faster website loading</li>
              </ul>
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. How We Use Cookies</h2>
            <div className="space-y-4 text-gray-600">
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Authentication:</strong> To keep you logged in as you navigate through SmartBrief</li>
                <li><strong>Personalization:</strong> To remember your news preferences and customize content</li>
                <li><strong>Security:</strong> To detect and prevent fraudulent activity</li>
                <li><strong>Analytics:</strong> To understand website performance and user behavior</li>
                <li><strong>Advertising:</strong> To show you relevant advertisements (if applicable)</li>
                <li><strong>Social Features:</strong> To enable social sharing and integration</li>
              </ul>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Settings className="w-6 h-6 text-blue-600 mr-3" />
              5. Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You have several options for managing cookies:
              </p>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser Settings</h3>
                <p className="mb-3">
                  You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Site Permissions → Cookies</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Opt-Out Options</h3>
                <p>
                  You can opt out of certain types of cookies and tracking:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-800">Google Analytics Opt-out</a></li>
                  <li>Advertising cookies: Visit the <a href="http://optout.aboutads.info/" className="text-blue-600 hover:text-blue-800">Digital Advertising Alliance</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cookie Retention */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookie Retention</h2>
            <div className="space-y-4 text-gray-600">
              <p>We use both session and persistent cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
              </ul>
              <p>
                Most of our cookies expire within 1-2 years, but some essential cookies may have longer expiration periods.
              </p>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Updates to This Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons.
              </p>
              <p>
                We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Mail className="w-6 h-6 text-orange-600 mr-3" />
              Contact Us About Cookies
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium text-gray-800 mb-2">SmartBrief Privacy Team</p>
                <p>Email: <a href="mailto:privacy@smartbrief.com" className="text-orange-600 hover:text-orange-800">privacy@smartbrief.com</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
              </div>
              <p className="text-sm">
                For general questions, you can also visit our <button
                  onClick={() => navigate('/contact')}
                  className="text-orange-600 hover:text-orange-800 font-medium underline"
                >
                  Contact page
                </button>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
