import React, { useState } from 'react';
import { Users, Bike, DollarSign, TrendingUp, Eye, Check, X, AlertTriangle } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalUsers: 1250,
    totalPartners: 89,
    totalBikes: 156,
    totalBookings: 2450,
    monthlyRevenue: 125000,
    pendingVerifications: 12
  };

  const pendingVerifications = [
    {
      id: 1,
      type: 'partner',
      name: 'Amit Kumar',
      bikeName: 'Royal Enfield Himalayan',
      submittedDate: '2024-01-15',
      documents: ['RC Book', 'Insurance', 'Pollution']
    },
    {
      id: 2,
      type: 'partner',
      name: 'Priya Sharma',
      bikeName: 'Honda CB Shine',
      submittedDate: '2024-01-14',
      documents: ['RC Book', 'Insurance']
    }
  ];

  const recentBookings = [
    {
      id: 1,
      customerName: 'Rahul Singh',
      partnerName: 'Amit Kumar',
      bikeName: 'Royal Enfield Classic 350',
      amount: 3600,
      status: 'active',
      date: '2024-01-15'
    },
    {
      id: 2,
      customerName: 'Neha Gupta',
      partnerName: 'Priya Sharma',
      bikeName: 'Honda Activa',
      amount: 1200,
      status: 'completed',
      date: '2024-01-14'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Users</p>
              <p className="text-2xl font-bold text-blue-600">{stats.totalUsers}</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Partners</p>
              <p className="text-2xl font-bold text-green-600">{stats.totalPartners}</p>
            </div>
            <Users className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Bikes</p>
              <p className="text-2xl font-bold text-purple-600">{stats.totalBikes}</p>
            </div>
            <Bike className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Monthly Revenue</p>
              <p className="text-2xl font-bold text-primary-600">₹{stats.monthlyRevenue}</p>
            </div>
            <DollarSign className="w-8 h-8 text-primary-600" />
          </div>
        </div>
      </div>

      {/* Pending Verifications Alert */}
      {stats.pendingVerifications > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="font-medium text-yellow-800">
              {stats.pendingVerifications} partner verifications pending approval
            </span>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
          <div className="space-y-3">
            {recentBookings.map(booking => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{booking.customerName}</p>
                  <p className="text-sm text-gray-600">{booking.bikeName}</p>
                  <p className="text-xs text-gray-500">Partner: {booking.partnerName}</p>
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

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Platform Analytics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Bookings</span>
              <span className="font-semibold">{stats.totalBookings}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Booking Value</span>
              <span className="font-semibold">₹{Math.round(stats.monthlyRevenue / 50)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customer Retention</span>
              <span className="font-semibold text-green-600">78%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Partner Satisfaction</span>
              <span className="font-semibold text-green-600">4.6/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVerifications = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Pending Verifications</h2>
      
      <div className="space-y-4">
        {pendingVerifications.map(verification => (
          <div key={verification.id} className="card p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{verification.name}</h3>
                <p className="text-gray-600">{verification.bikeName}</p>
                <p className="text-sm text-gray-500">Submitted: {verification.submittedDate}</p>
                
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Documents Uploaded:</p>
                  <div className="flex flex-wrap gap-2">
                    {verification.documents.map(doc => (
                      <span key={doc} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2 ml-4">
                <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Eye size={16} className="mr-1" />
                  Review
                </button>
                <button className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Check size={16} className="mr-1" />
                  Approve
                </button>
                <button className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  <X size={16} className="mr-1" />
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">User Management</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search users..."
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
          <button className="btn-primary">Search</button>
        </div>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { name: 'John Doe', email: 'john@example.com', type: 'Customer', joinDate: '2024-01-10', status: 'Active' },
              { name: 'Jane Smith', email: 'jane@example.com', type: 'Partner', joinDate: '2024-01-08', status: 'Active' },
              { name: 'Mike Johnson', email: 'mike@example.com', type: 'Customer', joinDate: '2024-01-05', status: 'Suspended' }
            ].map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{user.type}</td>
                <td className="px-6 py-4 text-sm">{user.joinDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                    <button className="text-red-600 hover:text-red-700 text-sm">
                      {user.status === 'Active' ? 'Suspend' : 'Activate'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'verifications', label: 'Verifications' },
    { id: 'users', label: 'Users' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage platform operations and users</p>
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
            {activeTab === 'verifications' && renderVerifications()}
            {activeTab === 'users' && renderUsers()}
            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Detailed analytics and reporting features coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
