import React, { useState } from 'react';
import { Calendar, DollarSign, Eye, EyeOff, TrendingUp, Clock, Star } from 'lucide-react';

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalEarnings: 45000,
    thisMonth: 12500,
    totalBookings: 89,
    activeBookings: 3,
    rating: 4.8,
    totalBikes: 2
  };

  const bookings = [
    {
      id: 1,
      customerName: 'Rahul Sharma',
      bikeName: 'Royal Enfield Classic 350',
      startDate: '2024-01-15',
      endDate: '2024-01-17',
      amount: 3600,
      status: 'active'
    },
    {
      id: 2,
      customerName: 'Priya Singh',
      bikeName: 'Honda Activa 6G',
      startDate: '2024-01-12',
      endDate: '2024-01-14',
      amount: 1800,
      status: 'completed'
    }
  ];

  const bikes = [
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      image: '/api/placeholder/100/80',
      dailyRate: 1200,
      totalBookings: 45,
      totalEarnings: 32000,
      status: 'active',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Honda Activa 6G',
      image: '/api/placeholder/100/80',
      dailyRate: 600,
      totalBookings: 44,
      totalEarnings: 13000,
      status: 'maintenance',
      rating: 4.7
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Earnings</p>
              <p className="text-2xl font-bold text-green-600">₹{stats.totalEarnings}</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">This Month</p>
              <p className="text-2xl font-bold text-primary-600">₹{stats.thisMonth}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-primary-600" />
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Bookings</p>
              <p className="text-2xl font-bold text-blue-600">{stats.totalBookings}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Rating</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.rating}</p>
            </div>
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <div className="space-y-3">
          {bookings.slice(0, 3).map(booking => (
            <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{booking.customerName}</p>
                <p className="text-sm text-gray-600">{booking.bikeName}</p>
                <p className="text-xs text-gray-500">{booking.startDate} to {booking.endDate}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary-600">₹{booking.amount}</p>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  booking.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBikes = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Bikes</h2>
        <button className="btn-primary">Add New Bike</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bikes.map(bike => (
          <div key={bike.id} className="card p-6">
            <div className="flex items-start space-x-4">
              <img 
                src={bike.image} 
                alt={bike.name}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{bike.name}</h3>
                <p className="text-gray-600">₹{bike.dailyRate}/day</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{bike.rating}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                bike.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {bike.status}
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Total Bookings</p>
                <p className="font-semibold">{bike.totalBookings}</p>
              </div>
              <div>
                <p className="text-gray-600">Total Earnings</p>
                <p className="font-semibold text-green-600">₹{bike.totalEarnings}</p>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="btn-secondary text-sm py-1 px-3 flex-1">Edit</button>
              <button className="btn-primary text-sm py-1 px-3 flex-1">
                {bike.status === 'active' ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEarnings = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Earnings Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 text-center">
          <h3 className="text-3xl font-bold text-green-600">₹{stats.totalEarnings}</h3>
          <p className="text-gray-600">Total Earnings</p>
        </div>
        <div className="card p-6 text-center">
          <h3 className="text-3xl font-bold text-primary-600">₹{stats.thisMonth}</h3>
          <p className="text-gray-600">This Month</p>
        </div>
        <div className="card p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600">₹{Math.round(stats.totalEarnings / stats.totalBookings)}</h3>
          <p className="text-gray-600">Average per Booking</p>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Payment History</h3>
        <div className="space-y-3">
          {[
            { date: '2024-01-15', amount: 2400, status: 'Paid', method: 'Bank Transfer' },
            { date: '2024-01-10', amount: 1800, status: 'Paid', method: 'UPI' },
            { date: '2024-01-05', amount: 3200, status: 'Pending', method: 'Bank Transfer' }
          ].map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">₹{payment.amount}</p>
                <p className="text-sm text-gray-600">{payment.date} • {payment.method}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {payment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'bikes', label: 'My Bikes' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'earnings', label: 'Earnings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Partner Dashboard</h1>
          <p className="text-gray-600">Manage your bikes and track earnings</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'bikes' && renderBikes()}
            {activeTab === 'bookings' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">All Bookings</h2>
                {bookings.map(booking => (
                  <div key={booking.id} className="card p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{booking.customerName}</p>
                        <p className="text-sm text-gray-600">{booking.bikeName}</p>
                        <p className="text-xs text-gray-500">{booking.startDate} to {booking.endDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary-600">₹{booking.amount}</p>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'earnings' && renderEarnings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
