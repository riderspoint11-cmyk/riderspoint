import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Shield, Clock, MapPin, Users, Settings, Fuel, ArrowLeft, Heart } from 'lucide-react';

const BikeDetailPage = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const mockBike = {
    id: 1,
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    category: 'cruiser',
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    price: 1200,
    rating: 4.8,
    reviews: 45,
    cc: '350cc',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 2,
    mileage: '35 km/l',
    topSpeed: '120 km/h',
    fuelCapacity: '13.5L',
    features: ['Long Range', 'Comfortable Riding', 'Highway Ready', 'Classic Design'],
    description: 'The Royal Enfield Classic 350 is a perfect blend of vintage charm and modern engineering. Ideal for long rides and city commutes alike.',
    specifications: {
      engine: '349cc Single Cylinder',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      weight: '195 kg',
      brakes: 'Disc (Front), Drum (Rear)',
      tyres: '90/90-19 (Front), 120/80-18 (Rear)'
    },
    policies: {
      kmLimit: '200 km/day',
      extraKmCharge: '₹5/km',
      securityDeposit: '₹3000',
      lateFee: '₹100/hour',
      fuelPolicy: 'Return with same fuel level'
    },
    available: true,
    location: 'Sector 15, Noida'
  };

  useEffect(() => {
    setBike(mockBike);
  }, [id]);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading bike details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/bikes" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Bikes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <img 
                src={bike.images[selectedImageIndex]} 
                alt={bike.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-4 right-4 p-2 rounded-full ${
                  isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-400'
                } hover:scale-110 transition-transform`}
              >
                <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {bike.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImageIndex === index ? 'border-primary-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${bike.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Bike Details */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{bike.name}</h1>
                  <p className="text-gray-600 text-lg">{bike.brand}</p>
                </div>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {bike.category}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{bike.rating}</span>
                </div>
                <span className="ml-2 text-gray-600">({bike.reviews} reviews)</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Settings size={16} className="mr-2" />
                  <span>{bike.cc}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Fuel size={16} className="mr-2" />
                  <span>{bike.transmission}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={16} className="mr-2" />
                  <span>{bike.seats} Seater</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-4 h-4 mr-2">⛽</span>
                  <span>{bike.mileage}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{bike.description}</p>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin size={16} className="mr-2" />
                <span>{bike.location}</span>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-3xl font-bold text-primary-600">₹{bike.price}</span>
                    <span className="text-gray-500 ml-2">/day</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Security Deposit</p>
                    <p className="font-semibold">{bike.policies.securityDeposit}</p>
                  </div>
                </div>

                {bike.available ? (
                  <Link 
                    to={`/book/${bike.id}`} 
                    className="w-full btn-primary text-center block"
                  >
                    Book Now
                  </Link>
                ) : (
                  <button disabled className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-lg cursor-not-allowed">
                    Currently Unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Settings className="mr-2" size={20} />
                Specifications
              </h3>
              <dl className="space-y-2">
                {Object.entries(bike.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2" size={20} />
                Rental Policies
              </h3>
              <dl className="space-y-2">
                {Object.entries(bike.policies).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-gray-600 capitalize text-sm">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="mr-2" size={20} />
                Features
              </h3>
              <ul className="space-y-2">
                {bike.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Safety Information */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
            <Shield className="mr-2" size={20} />
            Safety Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>Valid driving license required</span>
            </div>
            <div className="flex items-center">
              <Shield size={16} className="mr-2" />
              <span>Helmet provided with every rental</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-2" />
              <span>ID proof verification mandatory</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>24/7 roadside assistance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetailPage;
