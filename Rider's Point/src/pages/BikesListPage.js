import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Fuel, Users, Settings } from 'lucide-react';

const BikesListPage = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    priceRange: 'all',
    transmission: 'all'
  });

  // Mock bike data
  const mockBikes = [
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      brand: 'Royal Enfield',
      category: 'cruiser',
      image: '/api/placeholder/400/300',
      price: 1200,
      rating: 4.8,
      reviews: 45,
      cc: '350cc',
      transmission: 'Manual',
      fuelType: 'Petrol',
      seats: 2,
      features: ['Long Range', 'Comfortable', 'Highway Ready'],
      available: true
    },
    {
      id: 2,
      name: 'Honda Activa 6G',
      brand: 'Honda',
      category: 'scooter',
      image: '/api/placeholder/400/300',
      price: 600,
      rating: 4.6,
      reviews: 89,
      cc: '110cc',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      seats: 2,
      features: ['Fuel Efficient', 'Easy Ride', 'City Perfect'],
      available: true
    },
    {
      id: 3,
      name: 'KTM Duke 390',
      brand: 'KTM',
      category: 'sports',
      image: '/api/placeholder/400/300',
      price: 1800,
      rating: 4.9,
      reviews: 32,
      cc: '390cc',
      transmission: 'Manual',
      fuelType: 'Petrol',
      seats: 1,
      features: ['High Performance', 'Sporty', 'Track Ready'],
      available: true
    },
    {
      id: 4,
      name: 'Bajaj Pulsar 150',
      brand: 'Bajaj',
      category: 'commuter',
      image: '/api/placeholder/400/300',
      price: 800,
      rating: 4.4,
      reviews: 67,
      cc: '150cc',
      transmission: 'Manual',
      fuelType: 'Petrol',
      seats: 2,
      features: ['Reliable', 'Economical', 'Daily Commute'],
      available: false
    },
    {
      id: 5,
      name: 'Yamaha R15 V4',
      brand: 'Yamaha',
      category: 'sports',
      image: '/api/placeholder/400/300',
      price: 1500,
      rating: 4.7,
      reviews: 28,
      cc: '155cc',
      transmission: 'Manual',
      fuelType: 'Petrol',
      seats: 1,
      features: ['Sporty Design', 'Quick', 'Agile'],
      available: true
    },
    {
      id: 6,
      name: 'TVS Jupiter',
      brand: 'TVS',
      category: 'scooter',
      image: '/api/placeholder/400/300',
      price: 550,
      rating: 4.5,
      reviews: 54,
      cc: '110cc',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      seats: 2,
      features: ['Comfortable', 'Storage', 'Family Friendly'],
      available: true
    }
  ];

  useEffect(() => {
    setBikes(mockBikes);
    setFilteredBikes(mockBikes);
  }, []);

  useEffect(() => {
    let filtered = bikes;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(bike => 
        bike.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        bike.brand.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(bike => bike.category === filters.category);
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-800':
          filtered = filtered.filter(bike => bike.price < 800);
          break;
        case '800-1500':
          filtered = filtered.filter(bike => bike.price >= 800 && bike.price <= 1500);
          break;
        case 'above-1500':
          filtered = filtered.filter(bike => bike.price > 1500);
          break;
        default:
          break;
      }
    }

    // Transmission filter
    if (filters.transmission !== 'all') {
      filtered = filtered.filter(bike => bike.transmission.toLowerCase() === filters.transmission);
    }

    setFilteredBikes(filtered);
  }, [filters, bikes]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Bike Fleet</h1>
          <p className="text-gray-600">Choose from our wide range of motorcycles and scooters</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search bikes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="scooter">Scooters</option>
              <option value="commuter">Commuter</option>
              <option value="sports">Sports</option>
              <option value="cruiser">Cruiser</option>
            </select>

            {/* Price Range */}
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under-800">Under ₹800</option>
              <option value="800-1500">₹800 - ₹1500</option>
              <option value="above-1500">Above ₹1500</option>
            </select>

            {/* Transmission */}
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={filters.transmission}
              onChange={(e) => handleFilterChange('transmission', e.target.value)}
            >
              <option value="all">All Transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>

            {/* Reset Filters */}
            <button
              onClick={() => setFilters({ search: '', category: 'all', priceRange: 'all', transmission: 'all' })}
              className="btn-secondary flex items-center justify-center"
            >
              <Filter size={16} className="mr-2" />
              Reset
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBikes.length} of {bikes.length} bikes
          </p>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <div key={bike.id} className="card overflow-hidden">
              <div className="relative">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-48 object-cover"
                />
                {!bike.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Not Available</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-white px-2 py-1 rounded text-sm font-medium text-gray-900">
                    {bike.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{bike.name}</h3>
                <p className="text-gray-600 mb-3">{bike.brand}</p>
                
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{bike.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({bike.reviews} reviews)</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Settings size={16} className="mr-1" />
                    {bike.cc}
                  </div>
                  <div className="flex items-center">
                    <Fuel size={16} className="mr-1" />
                    {bike.transmission}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {bike.seats} Seater
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-1">⛽</span>
                    {bike.fuelType}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {bike.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">₹{bike.price}</span>
                    <span className="text-gray-500 text-sm">/day</span>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      to={`/bikes/${bike.id}`} 
                      className="btn-secondary text-sm py-2 px-4"
                    >
                      View Details
                    </Link>
                    {bike.available && (
                      <Link 
                        to={`/book/${bike.id}`} 
                        className="btn-primary text-sm py-2 px-4"
                      >
                        Book Now
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No bikes found matching your criteria.</p>
            <button
              onClick={() => setFilters({ search: '', category: 'all', priceRange: 'all', transmission: 'all' })}
              className="btn-primary mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BikesListPage;
