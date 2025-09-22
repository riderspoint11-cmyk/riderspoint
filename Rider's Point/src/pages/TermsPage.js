import React from 'react';
import { FileText, Calendar } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Last updated: January 15, 2024</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Rider's Point platform, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You must be at least 18 years old</li>
              <li>You must possess a valid driving license (minimum 6 months old)</li>
              <li>You must provide valid government-issued identification</li>
              <li>You must have a valid payment method</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking and Rental</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>3.1 Booking Process:</strong> All bookings must be made through our platform with valid documentation and payment.</p>
              <p><strong>3.2 Rental Period:</strong> Rental period begins at the agreed pickup time and ends at the return time.</p>
              <p><strong>3.3 Late Returns:</strong> Late return charges of ₹100 per hour apply after a 30-minute grace period.</p>
              <p><strong>3.4 Cancellation:</strong> Bookings can be cancelled up to 6 hours before pickup time. Cancellation charges may apply.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security Deposit</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Security deposit ranges from ₹2,000 to ₹5,000 based on bike model</li>
              <li>Deposit is refunded within 3-5 business days after bike return</li>
              <li>Deductions may be made for damages, traffic violations, or other charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsibilities</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>5.1 Rider Responsibilities:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Follow all traffic rules and regulations</li>
                <li>Use bike only for legal purposes</li>
                <li>Return bike in the same condition as received</li>
                <li>Report any accidents or damages immediately</li>
                <li>Not modify or tamper with the bike</li>
              </ul>
              
              <p><strong>5.2 Platform Responsibilities:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide well-maintained and insured bikes</li>
                <li>Offer 24/7 roadside assistance</li>
                <li>Process refunds as per policy</li>
                <li>Maintain platform security and privacy</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Damages and Liability</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Rider is liable for any damage to the bike during rental period</li>
              <li>First ₹5,000 of any insurance claim is rider's responsibility</li>
              <li>Traffic violations and fines are rider's responsibility</li>
              <li>Theft or total loss may result in full bike value charge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Uses</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Using bike for commercial purposes without permission</li>
              <li>Allowing unlicensed persons to ride</li>
              <li>Racing or reckless driving</li>
              <li>Carrying illegal substances or items</li>
              <li>Exceeding bike's passenger or weight limit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy Policy</h2>
            <p className="text-gray-700">
              We collect and use personal information as described in our Privacy Policy. 
              By using our services, you consent to such processing and you warrant that all data provided by you is accurate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700">
              Rider's Point shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <p className="text-gray-700">
              Any disputes arising from these terms shall be resolved through arbitration in accordance with the 
              Arbitration and Conciliation Act, 2015. The jurisdiction shall be Delhi, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes 
              via email or platform notifications. Continued use constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700">
              For any questions regarding these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong> legal@riderspoint.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Address:</strong> Sector 15 Metro Station, Noida, UP 201301</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
