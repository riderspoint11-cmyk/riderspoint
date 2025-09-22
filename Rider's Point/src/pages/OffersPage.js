import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Calendar, Gift, Percent, Star, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const OffersPage = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [expandedTerms, setExpandedTerms] = useState({});
  const [offers, setOffers] = useState([]);

  // Fetch offers dynamically (simulate API call)
  useEffect(() => {
    const fetchOffers = async () => {
      const fetchedOffers = [
        {
          id: 1,
          title: 'Welcome Offer',
          description: 'Get 25% off on your first booking',
          code: 'WELCOME25',
          discount: '25%',
          minBooking: 500,
          maxDiscount: 500,
          validTill: '2024-12-31',
          type: 'percentage',
          category: 'new-user',
          terms: [
            'Valid for first-time users only',
            'Minimum booking amount: ₹500',
            'Maximum discount: ₹500',
            'Cannot be combined with other offers'
          ]
        },
        {
          id: 2,
          title: 'Weekend Special',
          description: 'Flat ₹200 off on weekend bookings',
          code: 'WEEKEND200',
          discount: '₹200',
          minBooking: 1000,
          maxDiscount: 200,
          validTill: '2024-06-30',
          type: 'flat',
          category: 'weekend',
          terms: [
            'Valid for Saturday and Sunday bookings only',
            'Minimum booking amount: ₹1000',
            'Valid till June 30, 2024'
          ]
        },
        {
          id: 3,
          title: 'Long Trip Discount',
          description: '15% off on bookings of 3+ days',
          code: 'LONGTRIP15',
          discount: '15%',
          minBooking: 2000,
          maxDiscount: 1000,
          validTill: '2024-08-31',
          type: 'percentage',
          category: 'long-trip',
          terms: [
            'Valid for bookings of 3 days or more',
            'Minimum booking amount: ₹2000',
            'Maximum discount: ₹1000'
          ]
        },
        {
          id: 4,
          title: 'Referral Bonus',
          description: 'Refer a friend and both get ₹150 off',
          code: 'REFER150',
          discount: '₹150',
          minBooking: 800,
          maxDiscount: 150,
          validTill: '2024-12-31',
          type: 'referral',
          category: 'referral',
          terms: [
            'Both referrer and referee get ₹150 off',
            'Referee must be a new user',
            'Minimum booking amount: ₹800 for both users'
          ]
        },
        {
          id: 5,
          title: 'Festival Special',
          description: '30% off during festival season',
          code: 'FESTIVAL30',
          discount: '30%',
          minBooking: 1200,
          maxDiscount: 800,
          validTill: '2024-03-31',
          type: 'percentage',
          category: 'festival',
          terms: [
            'Valid during festival seasons only',
            'Minimum booking amount: ₹1200',
            'Maximum discount: ₹800',
            'Limited time offer'
          ]
        }
      ];
      setOffers(fetchedOffers);
    };

    fetchOffers();
  }, []);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const toggleTerms = (offerId) => {
    setExpandedTerms((prev) => ({
      ...prev,
      [offerId]: !prev[offerId]
    }));
  };

  const getOfferIcon = (category) => {
    switch (category) {
      case 'new-user': return <Star className="w-6 h-6" />;
      case 'weekend': return <Calendar className="w-6 h-6" />;
      case 'long-trip': return <Clock className="w-6 h-6" />;
      case 'referral': return <Gift className="w-6 h-6" />;
      case 'festival': return <Percent className="w-6 h-6" />;
      default: return <Gift className="w-6 h-6" />;
    }
  };

  const getOfferColor = (category) => {
    switch (category) {
      case 'new-user': return 'from-blue-500 to-blue-600';
      case 'weekend': return 'from-green-500 to-green-600';
      case 'long-trip': return 'from-purple-500 to-purple-600';
      case 'referral': return 'from-pink-500 to-pink-600';
      case 'festival': return 'from-orange-500 to-orange-600';
      default: return 'from-primary-500 to-primary-600';
    }
  };

  const isOfferActive = (validTill) => {
    return new Date(validTill) > new Date();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save more on your bike rentals with our exclusive deals and discounts
          </p>
        </div>

        {/* Featured Offer */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <Gift className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
              <p className="text-xl mb-6">
                Get up to 30% off on your next booking. Perfect time to plan that dream trip!
              </p>
              <Link to="/bikes" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Book Now & Save
              </Link>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offers.map((offer) => (
            <div key={offer.id} className="card overflow-hidden">
              {/* Offer Header */}
              <div className={`bg-gradient-to-r ${getOfferColor(offer.category)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  {getOfferIcon(offer.category)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isOfferActive(offer.validTill) 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {isOfferActive(offer.validTill) ? 'Active' : 'Expired'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-sm opacity-90">{offer.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold">{offer.discount}</span>
                  <span className="text-sm opacity-75 ml-2">OFF</span>
                </div>
              </div>

              {/* Offer Body */}
              <div className="p-6">
                {/* Promo Code */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg font-mono text-sm">
                      {offer.code}
                    </code>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      className="btn-secondary px-3 py-2 text-sm"
                    >
                      {copiedCode === offer.code ? (
                        <span className="text-green-600">Copied!</span>
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Offer Details */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Min. Booking:</span>
                    <span className="font-medium">₹{offer.minBooking}</span>
                  </div>
                  {offer.type === 'percentage' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max. Discount:</span>
                      <span className="font-medium">₹{offer.maxDiscount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valid Till:</span>
                    <span className="font-medium">{offer.validTill}</span>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="border-t pt-4">
                  <button 
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center w-full justify-between"
                    onClick={() => toggleTerms(offer.id)}
                  >
                    <span>Terms & Conditions</span>
                    {expandedTerms[offer.id] ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  
                  {expandedTerms[offer.id] && (
                    <div className="mt-3 text-xs text-gray-600">
                      <ul className="space-y-1">
                        {offer.terms.map((term, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {term}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Use Offer Button */}
                <Link 
                  to="/bikes" 
                  className={`mt-4 w-full text-center block py-2 px-4 rounded-lg font-medium transition-colors ${
                    isOfferActive(offer.validTill)
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isOfferActive(offer.validTill) ? 'Use This Offer' : 'Offer Expired'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How to Use Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Use Promo Codes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Your Bike</h3>
              <p className="text-gray-600 text-sm">Browse our fleet and select the perfect bike for your journey</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold mb-2">Enter Promo Code</h3>
              <p className="text-gray-600 text-sm">Apply your promo code at checkout to get instant discount</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold mb-2">Enjoy Savings</h3>
              <p className="text-gray-600 text-sm">Complete your booking and enjoy the discounted price</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Save?</h2>
          <p className="text-gray-600 mb-6">
            Don't miss out on these amazing deals. Book your bike today and start saving!
          </p>
          <Link to="/bikes" className="btn-primary text-lg px-8 py-3">
            Browse Bikes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
