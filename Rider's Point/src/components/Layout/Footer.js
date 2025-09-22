import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold">Rider's Point</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for bike rentals in Delhi NCR. Experience the freedom of the road with our premium fleet of motorcycles.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-500" />
                <span className="text-gray-300">Sector 15 Metro Station, Noida, UP 201301</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500" />
                <span className="text-gray-300">info@riderspoint.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/bikes" className="text-gray-300 hover:text-primary-500 transition-colors">Our Bikes</Link></li>
              <li><Link to="/offers" className="text-gray-300 hover:text-primary-500 transition-colors">Offers</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary-500 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors">Contact</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-primary-500 transition-colors">Become Partner</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-primary-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
              <li><a href="/partner-agreement.pdf" className="text-gray-300 hover:text-primary-500 transition-colors">Partner Agreement</a></li>
              <li><a href="/refund-policy.pdf" className="text-gray-300 hover:text-primary-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Rider's Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
