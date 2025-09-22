import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Clock, Shield, Users, Upload, CheckCircle } from 'lucide-react';

const OnboardPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    // Bike Info
    bikeName: '',
    brand: '',
    model: '',
    year: '',
    cc: '',
    transmission: '',
    fuelType: '',
    color: '',
    registrationNumber: '',
    // Documents
    rcBook: null,
    insurance: null,
    pollution: null,
    ownerPhoto: null,
    bikePhotos: [],
    // Pricing
    dailyRate: '',
    weeklyRate: '',
    monthlyRate: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.ownerName}
            onChange={(e) => handleInputChange('ownerName', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <textarea
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderBikeInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Bike Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bike Name</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.bikeName}
            onChange={(e) => handleInputChange('bikeName', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
          <select
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.brand}
            onChange={(e) => handleInputChange('brand', e.target.value)}
          >
            <option value="">Select Brand</option>
            <option value="Honda">Honda</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Royal Enfield">Royal Enfield</option>
            <option value="Bajaj">Bajaj</option>
            <option value="TVS">TVS</option>
            <option value="KTM">KTM</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.model}
            onChange={(e) => handleInputChange('model', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <input
            type="number"
            required
            min="2010"
            max="2024"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.year}
            onChange={(e) => handleInputChange('year', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Engine CC</label>
          <input
            type="number"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.cc}
            onChange={(e) => handleInputChange('cc', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
          <select
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.transmission}
            onChange={(e) => handleInputChange('transmission', e.target.value)}
          >
            <option value="">Select Transmission</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.registrationNumber}
            onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.color}
            onChange={(e) => handleInputChange('color', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Document Upload</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { field: 'rcBook', label: 'RC Book', required: true },
          { field: 'insurance', label: 'Insurance Certificate', required: true },
          { field: 'pollution', label: 'Pollution Certificate', required: true },
          { field: 'ownerPhoto', label: 'Owner Photo', required: true }
        ].map(doc => (
          <div key={doc.field} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="font-medium text-gray-900 mb-2">{doc.label}</h3>
            <input
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              id={doc.field}
              onChange={(e) => handleFileUpload(doc.field, e.target.files[0])}
            />
            <label
              htmlFor={doc.field}
              className="cursor-pointer text-primary-600 hover:text-primary-700"
            >
              Click to upload
            </label>
            {formData[doc.field] && (
              <p className="text-green-600 text-sm mt-2 flex items-center justify-center">
                <CheckCircle size={16} className="mr-1" />
                Uploaded
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Set Your Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Daily Rate (₹)</label>
          <input
            type="number"
            required
            min="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.dailyRate}
            onChange={(e) => handleInputChange('dailyRate', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Rate (₹)</label>
          <input
            type="number"
            min="500"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.weeklyRate}
            onChange={(e) => handleInputChange('weeklyRate', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rate (₹)</label>
          <input
            type="number"
            min="2000"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            value={formData.monthlyRate}
            onChange={(e) => handleInputChange('monthlyRate', e.target.value)}
          />
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Earning Potential</h3>
        <p className="text-blue-800 text-sm">
          Based on your daily rate of ₹{formData.dailyRate || 0}, you can earn up to ₹{(formData.dailyRate || 0) * 25} per month if booked for 25 days.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Become a Partner</h1>
          <p className="text-xl text-primary-100 mb-8">
            List your bike and start earning passive income today!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Earn ₹15,000+</h3>
              <p className="text-primary-100 text-sm">Monthly potential earnings</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Flexible Hours</h3>
              <p className="text-primary-100 text-sm">Set your own availability</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100% Insured</h3>
              <p className="text-primary-100 text-sm">Complete protection coverage</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Verified Riders</h3>
              <p className="text-primary-100 text-sm">All riders are KYC verified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 ${
                    step < currentStep ? 'bg-primary-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <span className="text-gray-600">
              Step {currentStep} of 4: {
                currentStep === 1 ? 'Personal Info' :
                currentStep === 2 ? 'Bike Details' :
                currentStep === 3 ? 'Documents' : 'Pricing'
              }
            </span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderBikeInfo()}
          {currentStep === 3 && renderDocuments()}
          {currentStep === 4 && renderPricing()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button onClick={nextStep} className="btn-primary">
                Next
              </button>
            ) : (
              <button className="btn-primary">
                Submit Application
              </button>
            )}
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>
            By submitting this application, you agree to our{' '}
            <Link to="/terms" className="text-primary-600 hover:text-primary-700">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <a href="/partner-agreement.pdf" className="text-primary-600 hover:text-primary-700">
              Partner Agreement
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardPage;
