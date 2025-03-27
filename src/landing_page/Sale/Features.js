import React from 'react';
import { FaShippingFast, FaCalendarAlt, FaConciergeBell, FaCreditCard } from 'react-icons/fa'; // Importing icons from react-icons

const Fetures = () => {
  const services = [
    {
      icon: <FaShippingFast className="text-3xl text-gray-800" />,
      title: 'Complementary Shipping & Return',
      description: 'We offer complementary shipping and returns on all orders.',
      linkText: 'Learn More',
      link: '#',
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-gray-800" />,
      title: 'Book an Appointment',
      description: 'We’re happy to help with in-store or virtual appointments.',
      linkText: 'Book Now',
      link: '#',
    },
    {
      icon: <FaConciergeBell className="text-3xl text-gray-800" />,
      title: 'At Your Service',
      description: 'Our customer care experts are always here to help you.',
      linkText: 'Contact Us',
      link: '#',
    },
    {
      icon: <FaCreditCard className="text-3xl text-gray-800" />,
      title: 'Payment Options',
      description: 'Explore our flexible payment options designed to fit every budget.',
      linkText: 'Learn More',
      link: '#',
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{service.description}</p>

            {/* Link */}
            <a
              href={service.link}
              className="text-teal-600 font-medium hover:underline flex items-center justify-center"
            >
              {service.linkText}
              <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Fetures;