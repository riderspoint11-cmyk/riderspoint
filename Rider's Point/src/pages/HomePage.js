import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Star, Users, ArrowRight, MapPin, Phone } from 'lucide-react';

const HomePage = () => {
  const featuredBikes = [
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      image: '/api/placeholder/400/300',
      price: '₹1,200/day',
      rating: 4.8,
      features: ['Manual', '350cc', 'Long trips']
    },
    {
      id: 2,
      name: 'Honda Activa 6G',
      image: '/api/placeholder/400/300',
      price: '₹600/day',
      rating: 4.6,
      features: ['Automatic', '110cc', 'City rides']
    },
    {
      id: 3,
      name: 'KTM Duke 390',
      image: '/api/placeholder/400/300',
      price: '₹1,800/day',
      rating: 4.9,
      features: ['Manual', '390cc', 'Sports']
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      rating: 5,
      text: 'Amazing service! Got a well-maintained bike for my Manali trip. Highly recommended!',
      location: 'Delhi'
    },
    {
      name: 'Priya Singh',
      rating: 5,
      text: 'Easy booking process and excellent customer support. Will definitely use again.',
      location: 'Noida'
    },
    {
      name: 'Amit Kumar',
      rating: 4,
      text: 'Great fleet of bikes and reasonable prices. Perfect for weekend adventures.',
      location: 'Gurgaon'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ride Your Dream Bike Today
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Premium bike rentals in Delhi NCR. From city commutes to highway adventures, 
                we have the perfect ride for every journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/bikes" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center justify-center">
                  Book Now <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/partners" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  List Your Bike
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/api/placeholder/600/400" 
                alt="Bike rental"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Rider's Point?</h2>
            <p className="text-xl text-gray-600">Experience the best bike rental service in Delhi NCR</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Safe</h3>
              <p className="text-gray-600">All bikes are thoroughly checked and insured for your safety</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round the clock customer support for any assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
              <p className="text-gray-600">Well-maintained bikes from top brands</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10,000+ Happy Riders</h3>
              <p className="text-gray-600">Join thousands of satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Bikes</h2>
            <p className="text-xl text-gray-600">Choose from our premium collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBikes.map((bike) => (
              <div key={bike.id} className="card p-6">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{bike.name}</h3>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{bike.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {bike.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-sm rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">{bike.price}</span>
                  <Link to={`/bikes/${bike.id}`} className="btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/bikes" className="btn-secondary">
              View All Bikes
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Special Launch Offer!</h2>
            <p className="text-xl mb-6">Get 25% off on your first booking. Use code: WELCOME25</p>
            <Link to="/offers" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              View All Offers
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Riders Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your dream bike now and hit the road with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bikes" className="btn-primary">
              Book a Bike
            </Link>
            <div className="flex items-center justify-center space-x-2 text-primary-400">
              <Phone size={20} />
              <span>Call: +91 9876543210</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
