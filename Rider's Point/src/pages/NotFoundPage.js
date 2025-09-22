import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary-200 mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-6">
            <img 
              src="/api/placeholder/300/300" 
              alt="Page not found"
              className="w-full h-full object-contain opacity-50"
            />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for seems to have taken a detour. 
          Let's get you back on the right route!
        </p>

        {/* Action Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            <Home size={18} className="mr-2" />
            Go Home
          </Link>
          
          <Link 
            to="/bikes" 
            className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
          >
            <Search size={18} className="mr-2" />
            Browse Bikes
          </Link>
        </div>

        {/* Help Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/about" className="text-primary-600 hover:text-primary-700">
              About Us
            </Link>
            <Link to="/contact" className="text-primary-600 hover:text-primary-700">
              Contact Support
            </Link>
            <Link to="/faq" className="text-primary-600 hover:text-primary-700">
              FAQ
            </Link>
            <Link to="/offers" className="text-primary-600 hover:text-primary-700">
              Special Offers
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <button 
          onClick={() => window.history.back()} 
          className="mt-8 inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={16} className="mr-1" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
