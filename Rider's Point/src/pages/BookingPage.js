import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, CreditCard, Shield, ArrowLeft } from 'lucide-react';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    startTime: '09:00',
    endTime: '18:00',
    pickupLocation: 'sector-15-noida',
    dropLocation: 'sector-15-noida',
    plan: 'daily',
    addOns: []
  });
  const [pricing, setPricing] = useState({
    basePrice: 0,
    days: 1,
    addOnsPrice: 0,
    tax: 0,
    total: 0
  });

  const mockBike = {
    id: 1,
    name: 'Royal Enfield Classic 350',
    image: '/api/placeholder/300/200',
    pricePerDay: 1200,
    securityDeposit: 3000
  };

  const locations = [
    { id: 'sector-15-noida', name: 'Sector 15 Metro Station, Noida' },
    { id: 'sector-18-noida', name: 'Sector 18 Metro Station, Noida' },
    { id: 'connaught-place', name: 'Connaught Place, Delhi' },
    { id: 'karol-bagh', name: 'Karol Bagh Metro Station, Delhi' }
  ];

  const addOns = [
    { id: 'helmet', name: 'Extra Helmet', price: 50 },
    { id: 'gopro', name: 'GoPro Camera', price: 300 },
    { id: 'luggage', name: 'Luggage Carrier', price: 100 },
    { id: 'toolkit', name: 'Emergency Toolkit', price: 75 }
  ];

  useEffect(() => {
    setBike(mockBike);
    // Set default dates (today and tomorrow)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setBookingData(prev => ({
      ...prev,
      startDate: today.toISOString().split('T')[0],
      endDate: tomorrow.toISOString().split('T')[0]
    }));
  }, [id]);

  useEffect(() => {
    calculatePricing();
  }, [bookingData, bike]);

  const calculatePricing = () => {
    if (!bike || !bookingData.startDate || !bookingData.endDate) return;

    const start = new Date(bookingData.startDate);
    const end = new Date(bookingData.endDate);
    const days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
    
    const basePrice = bike.pricePerDay * days;
    const addOnsPrice = bookingData.addOns.reduce((total, addonId) => {
      const addon = addOns.find(a => a.id === addonId);
      return total + (addon ? addon.price * days : 0);
    }, 0);
    
    const subtotal = basePrice + addOnsPrice;
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + tax;

    setPricing({
      basePrice,
      days,
      addOnsPrice,
      tax,
      total
    });
  };

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddOnToggle = (addonId) => {
    setBookingData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addonId)
        ? prev.addOns.filter(id => id !== addonId)
        : [...prev.addOns, addonId]
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Process booking
    alert('Booking submitted successfully! Redirecting to payment...');
    navigate('/dashboard');
  };

  if (!bike) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(`/bikes/${id}`)}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Bike Details
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Book Your Ride</h1>
              
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-1" />
                      Start Date
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={bookingData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-1" />
                      End Date
                    </label>
                    <input
                      type="date"
                      required
                      min={bookingData.startDate}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={bookingData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock size={16} className="inline mr-1" />
                      Pickup Time
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={bookingData.startTime}
                      onChange={(e) => handleInputChange('startTime', e.target.value)}
                    >
                      {Array.from({ length: 24 }, (_, i) => {
                        const hour = i.toString().padStart(2, '0');
                        return (
                          <option key={hour} value={`${hour}:00`}>
                            {hour}:00
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock size={16} className="inline mr-1" />
                      Return Time
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={bookingData.endTime}
                      onChange={(e) => handleInputChange('endTime', e.target.value)}
                    >
                      {Array.from({ length: 24 }, (_, i) => {
                        const hour = i.toString().padStart(2, '0');
                        return (
                          <option key={hour} value={`${hour}:00`}>
                            {hour}:00
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                {/* Location Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Pickup Location
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={bookingData.pickupLocation}
                      onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                    >
                      {locations.map(location => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Drop Location
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={bookingData.dropLocation}
                      onChange={(e) => handleInputChange('dropLocation', e.target.value)}
                    >
                      {locations.map(location => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Add-ons (Optional)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {addOns.map(addon => (
                      <label key={addon.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          checked={bookingData.addOns.includes(addon.id)}
                          onChange={() => handleAddOnToggle(addon.id)}
                        />
                        <div className="ml-3 flex-1">
                          <span className="font-medium">{addon.name}</span>
                          <span className="text-primary-600 font-semibold ml-2">₹{addon.price}/day</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <CreditCard size={20} className="mr-2" />
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h2>
              
              {/* Bike Info */}
              <div className="flex items-center mb-4 p-3 bg-gray-50 rounded-lg">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-16 h-12 object-cover rounded"
                />
                <div className="ml-3">
                  <h3 className="font-semibold">{bike.name}</h3>
                  <p className="text-sm text-gray-600">₹{bike.pricePerDay}/day</p>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{pricing.days} day{pricing.days !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup:</span>
                  <span className="font-medium">{bookingData.startDate} at {bookingData.startTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Return:</span>
                  <span className="font-medium">{bookingData.endDate} at {bookingData.endTime}</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base Price ({pricing.days} day{pricing.days !== 1 ? 's' : ''})</span>
                  <span>₹{pricing.basePrice}</span>
                </div>
                {pricing.addOnsPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons</span>
                    <span>₹{pricing.addOnsPrice}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Tax (18% GST)</span>
                  <span>₹{pricing.tax.toFixed(0)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-primary-600">₹{pricing.total.toFixed(0)}</span>
                </div>
              </div>

              {/* Security Deposit Info */}
              <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center text-blue-800">
                  <Shield size={16} className="mr-2" />
                  <span className="font-medium">Security Deposit</span>
                </div>
                <p className="text-blue-700 text-sm mt-1">
                  ₹{bike.securityDeposit} refundable deposit required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
