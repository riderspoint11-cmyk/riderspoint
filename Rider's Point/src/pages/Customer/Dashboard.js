import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Star, FileText, User, CreditCard, Bell } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  // Mock data
  const bookings = [
    {
      id: 1,
      bikeName: 'Royal Enfield Classic 350',
      bikeImage: '/api/placeholder/100/80',
      startDate: '2024-01-15',
      endDate: '2024-01-17',
      status: 'active',
      totalAmount: 3600,
      pickupLocation: 'Sector 15, Noida'
    },
    {
      id: 2,
      bikeName: 'Honda Activa 6G',
      bikeImage: '/api/placeholder/100/80',
      startDate: '2024-01-10',
      endDate: '2024-01-11',
      status: 'completed',
      totalAmount: 720,
      pickupLocation: 'Connaught Place, Delhi'
    }
  ];

  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    drivingLicense: 'DL1420110012345',
    joinDate: '2024-01-01',
    totalRides: 15,
    totalSpent: 45000
  };

  const tabs = [
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const renderBookings = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Bookings</h2>
        <Link to="/bikes" className="btn-primary">
          Book New Ride
        </Link>
      </div>

      {bookings.map(booking => (
        <div key={booking.id} className="card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={booking.bikeImage} 
                alt={booking.bikeName}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg">{booking.bikeName}</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar size={14} className="mr-1" />
                  {booking.startDate} to {booking.endDate}
                </div>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <MapPin size={14} className="mr-1" />
                  {booking.pickupLocation}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                booking.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : booking.status === 'completed'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
              <p className="text-xl font-bold text-primary-600 mt-2">
                ₹{booking.totalAmount}
              </p>
              <div className="flex space-x-2 mt-2">
                <button className="btn-secondary text-xs py-1 px-3">
                  View Details
                </button>
                {booking.status === 'completed' && (
                  <button className="btn-primary text-xs py-1 px-3">
                    Rate & Review
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        <button className="btn-primary">Edit Profile</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-4">Personal Information</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <p className="font-medium">{profile.name}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="font-medium">{profile.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <p className="font-medium">{profile.phone}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Driving License</label>
              <p className="font-medium">{profile.drivingLicense}</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold mb-4">Ride Statistics</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Member Since</label>
              <p className="font-medium">{profile.joinDate}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Total Rides</label>
              <p className="font-medium">{profile.totalRides}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Total Spent</label>
              <p className="font-medium text-primary-600">₹{profile.totalSpent}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold mb-4">Document Verification</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
            <span>Driving License</span>
            <span className="text-green-600 font-medium">Verified ✓</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
            <span>Aadhaar Card</span>
            <span className="text-green-600 font-medium">Verified ✓</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Payment History</h2>
      
      <div className="space-y-3">
        {[
          { date: '2024-01-15', amount: 3600, method: 'UPI', status: 'Success', booking: 'Royal Enfield Classic 350' },
          { date: '2024-01-10', amount: 720, method: 'Card', status: 'Success', booking: 'Honda Activa 6G' }
        ].map((payment, index) => (
          <div key={index} className="card p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{payment.booking}</p>
                <p className="text-sm text-gray-600">{payment.date} • {payment.method}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{payment.amount}</p>
                <span className="text-green-600 text-sm">{payment.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Notifications</h2>
      
      <div className="space-y-3">
        {[
          { type: 'booking', message: 'Your booking for Royal Enfield Classic 350 is confirmed', time: '2 hours ago', read: false },
          { type: 'offer', message: 'Special 25% discount on weekend bookings!', time: '1 day ago', read: true }
        ].map((notification, index) => (
          <div key={index} className={`card p-4 ${!notification.read ? 'border-l-4 border-primary-500' : ''}`}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className={`${!notification.read ? 'font-medium' : ''}`}>
                  {notification.message}
                </p>
                <p className="text-sm text-gray-600 mt-1">{notification.time}</p>
              </div>
              {!notification.read && (
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User size={32} className="text-primary-600" />
                </div>
                <h3 className="font-semibold">{profile.name}</h3>
                <p className="text-gray-600 text-sm">{profile.email}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id 
                          ? 'bg-primary-100 text-primary-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'bookings' && renderBookings()}
              {activeTab === 'profile' && renderProfile()}
              {activeTab === 'payments' && renderPayments()}
              {activeTab === 'notifications' && renderNotifications()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
