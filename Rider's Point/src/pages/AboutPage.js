import React from 'react';
import { Shield, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Riders' },
    { number: '500+', label: 'Bikes Available' },
    { number: '50+', label: 'Cities Covered' },
    { number: '99.8%', label: 'Customer Satisfaction' }
  ];

  const team = [
    {
      name: 'Raj Kumar',
      position: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      description: 'Passionate about revolutionizing urban mobility'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      image: '/api/placeholder/300/300',
      description: 'Ensuring smooth operations across all locations'
    },
    {
      name: 'Amit Singh',
      position: 'Technology Lead',
      image: '/api/placeholder/300/300',
      description: 'Building the future of bike rental technology'
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Every bike is thoroughly inspected and maintained for your safety.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Centric',
      description: 'We prioritize our customers and their experience above everything.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Service',
      description: 'Premium bikes with exceptional service standards.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Rider's Point</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We're on a mission to make bike rentals accessible, affordable, and reliable for everyone in Delhi NCR. 
            Founded in 2024, we've grown to become the most trusted bike rental platform in the region.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Rider's Point was born out of a simple observation: getting around Delhi NCR shouldn't be a hassle. 
                  Whether you need a bike for daily commuting, weekend adventures, or business trips, we believe 
                  everyone deserves access to reliable, well-maintained motorcycles.
                </p>
                <p>
                  Starting from a small garage in Noida with just 5 bikes, we've grown into a network of hundreds 
                  of verified partners across the region. Our technology-first approach ensures seamless booking, 
                  transparent pricing, and exceptional customer service.
                </p>
                <p>
                  Today, we're proud to serve thousands of riders every month, helping them explore the beautiful 
                  roads of North India with confidence and convenience.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Our story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind Rider's Point</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">Sector 15 Metro Station<br />Noida, UP 201301</p>
            </div>
            <div>
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">info@riderspoint.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
