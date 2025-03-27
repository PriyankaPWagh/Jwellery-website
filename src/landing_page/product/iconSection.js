import React from 'react';
import { FaGem, FaShieldAlt, FaHeart, FaVideo, FaTruck } from 'react-icons/fa'; // Icons from react-icons
// import './App.css';

function IconSection() {
  // Array of features with icons and text
  const features = [
    {
      icon: <FaGem className="text-2xl text-gray-700" />,
      text: "2500+ Unique Designs",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-gray-700" />,
      text: "Assured Warranty",
    },
    {
      icon: <FaHeart className="text-2xl text-gray-700" />,
      text: "Celebrity Favorite",
    },
    {
      icon: <FaVideo className="text-2xl text-gray-700" />,
      text: "Video Calling Assistance",
    },
    {
      icon: <FaTruck className="text-2xl text-gray-700" />,
      text: "Shipping Worldwide",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 m-2"
          >
            <div className="mb-2">{feature.icon}</div>
            <p className="text-sm font-semibold text-gray-800 text-center">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconSection;