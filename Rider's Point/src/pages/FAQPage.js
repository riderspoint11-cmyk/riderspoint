import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const categories = [
    { id: 'general', label: 'General', icon: '❓' },
    { id: 'booking', label: 'Booking', icon: '📅' },
    { id: 'payment', label: 'Payment', icon: '💳' },
    { id: 'safety', label: 'Safety', icon: '🛡️' },
    { id: 'partner', label: 'Partner', icon: '🤝' }
  ];

  const faqs = {
    general: [
      {
        question: 'What is Rider\'s Point?',
        answer: 'Rider\'s Point is a premium bike rental platform that connects bike owners with riders across Delhi NCR. We offer a wide range of motorcycles and scooters for daily commutes, weekend trips, and long adventures.'
      },
      {
        question: 'What documents do I need to rent a bike?',
        answer: 'You need a valid driving license (at least 6 months old), a government-issued ID proof (Aadhaar, Passport, Voter ID), and address proof. All documents must be original and valid.'
      },
      {
        question: 'What is the minimum age to rent a bike?',
        answer: 'You must be at least 18 years old and have a valid driving license to rent a bike from our platform.'
      },
      {
        question: 'Do you provide helmets?',
        answer: 'Yes, we provide complimentary helmets with every rental. Additional helmets can be requested for an extra charge.'
      }
    ],
    booking: [
      {
        question: 'How do I book a bike?',
        answer: 'Simply browse our fleet, select your preferred bike, choose your rental dates, upload required documents, and make the payment. Your booking will be confirmed instantly.'
      },
      {
        question: 'Can I modify or cancel my booking?',
        answer: 'Yes, you can modify or cancel your booking up to 6 hours before the pickup time through your dashboard. Cancellation charges may apply based on our policy.'
      },
      {
        question: 'What if the bike is not available at pickup?',
        answer: 'In rare cases of unavailability, we\'ll provide a similar or better bike at no extra cost, or offer a full refund if you choose to cancel.'
      },
      {
        question: 'Can I extend my rental period?',
        answer: 'Yes, you can extend your rental through the app or by calling our support team, subject to bike availability and additional charges.'
      }
    ],
    payment: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit/debit cards, UPI, net banking, and digital wallets. Cash payments are not accepted.'
      },
      {
        question: 'What is the security deposit?',
        answer: 'Security deposit varies by bike model, typically ranging from ₹2,000 to ₹5,000. It\'s refunded within 3-5 business days after returning the bike in good condition.'
      },
      {
        question: 'Are there any hidden charges?',
        answer: 'No, we believe in transparent pricing. All charges including taxes, security deposit, and any applicable fees are clearly mentioned during booking.'
      },
      {
        question: 'What if I return the bike late?',
        answer: 'Late return charges of ₹100 per hour apply after a 30-minute grace period. For delays over 6 hours, you\'ll be charged for an additional day.'
      }
    ],
    safety: [
      {
        question: 'Are the bikes insured?',
        answer: 'Yes, all our bikes are comprehensively insured. However, riders are responsible for the first ₹5,000 of any damage claim.'
      },
      {
        question: 'What should I do in case of an accident?',
        answer: 'Immediately call our 24/7 helpline and local police. Don\'t admit fault or make any statements. We\'ll guide you through the process and provide necessary support.'
      },
      {
        question: 'Do you provide roadside assistance?',
        answer: 'Yes, we provide 24/7 roadside assistance for breakdowns, flat tires, and other mechanical issues at no extra cost.'
      },
      {
        question: 'What if the bike gets stolen?',
        answer: 'Immediately file a police complaint and inform us. While bikes are insured, you may be liable for the deductible amount as per our terms and conditions.'
      }
    ],
    partner: [
      {
        question: 'How can I list my bike on your platform?',
        answer: 'Visit our partner page, fill out the application form with your bike details, upload required documents, and our team will verify and approve your listing within 24-48 hours.'
      },
      {
        question: 'How much can I earn as a partner?',
        answer: 'Earnings depend on your bike model, location, and demand. On average, partners earn ₹8,000-₹15,000 per month. Premium bikes in high-demand areas can earn even more.'
      },
      {
        question: 'What documents do I need to become a partner?',
        answer: 'You need bike RC, valid insurance, pollution certificate, your driving license, and Aadhaar card. All documents must be current and valid.'
      },
      {
        question: 'How and when do I get paid?',
        answer: 'Payments are processed weekly via bank transfer or UPI. You\'ll receive 70-80% of the rental amount after deducting our commission and applicable charges.'
      }
    ]
  };

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredFaqs = faqs[activeCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our bike rental service
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.label}</span>
                    <span className="ml-auto text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {faqs[category.id]?.length || 0}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {categories.find(cat => cat.id === activeCategory)?.label} Questions
                </h2>
                {searchTerm && (
                  <p className="text-sm text-gray-600 mt-2">
                    Showing {filteredFaqs.length} result(s) for "{searchTerm}"
                  </p>
                )}
              </div>

              <div className="divide-y divide-gray-200">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openItems[`${activeCategory}-${index}`];
                    return (
                      <div key={index} className="p-6">
                        <button
                          onClick={() => toggleItem(activeCategory, index)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <h3 className="font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="mt-3 pr-12">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-12 text-center">
                    <p className="text-gray-500">No FAQs found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Support
            </a>
            <a href="tel:+919876543210" className="btn-secondary">
              Call: +91 9876543210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
