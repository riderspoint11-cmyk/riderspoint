import React from 'react';
import { Shield, Calendar } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Last updated: January 15, 2024</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Rider's Point, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>2.1 Personal Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, phone number</li>
                <li>Date of birth and address</li>
                <li>Driving license details</li>
                <li>Government ID proof</li>
                <li>Payment information</li>
              </ul>
              
              <p><strong>2.2 Usage Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Booking history and preferences</li>
                <li>Location data during rental</li>
                <li>Device information and IP address</li>
                <li>App usage patterns</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Process bookings and payments</li>
              <li>Verify identity and driving credentials</li>
              <li>Provide customer support</li>
              <li>Send booking confirmations and updates</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
            <div className="space-y-4 text-gray-700">
              <p>We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bike Partners:</strong> Name and contact details for pickup/drop coordination</li>
                <li><strong>Payment Processors:</strong> Necessary information for payment processing</li>
                <li><strong>Legal Authorities:</strong> When required by law or legal process</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist our operations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Industry-standard encryption for data transmission</li>
              <li>Secure servers with regular security updates</li>
              <li>Limited access to personal data on need-to-know basis</li>
              <li>Regular security audits and monitoring</li>
              <li>Secure payment processing through certified providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Withdraw consent for data processing</li>
                <li>Data portability</li>
                <li>Object to data processing</li>
              </ul>
              <p>To exercise these rights, contact us at privacy@riderspoint.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
              and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal data only as long as necessary for the purposes outlined in this policy 
              or as required by law. Typically, data is retained for 7 years after account closure for legal compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for children under 18. We do not knowingly collect personal 
              information from children. If you become aware of such collection, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Transfers</h2>
            <p className="text-gray-700">
              Your data may be transferred to and processed in countries other than your own. 
              We ensure adequate protection through appropriate safeguards and security measures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy periodically. Significant changes will be communicated 
              via email or platform notifications. Continued use constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For any privacy-related questions or concerns, please contact us:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>Privacy Officer:</strong> privacy@riderspoint.com</p>
              <p><strong>General Inquiries:</strong> info@riderspoint.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Address:</strong> Sector 15 Metro Station, Noida, UP 201301</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
