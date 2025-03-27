import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Icons for favorites and cart

function Shop() {
  // Array of products with details
  const products = [
    {
      image: '/media/assests/ring.png',
      name: 'LUXURY REFRESH - SET OF 2 EMERALD DIAMOND ROSE GOLD RING',
      originalPrice: '$699',
      discountedPrice: '$599',
      discount: '$100 OFF',
    },
    {
      image:'/media/assests/bracellet.png',
      name: 'AMERICAN DIAMOND GOLD PLATED HAND BRACELET',
      originalPrice: '$299',
      discountedPrice: '$249',
      discount: '$50 OFF',
    },
    {
      image: '/media/assests/chain.png',
      name: 'CUBIC ZIRCONA DIAMOND GOLD NECKLACE & EARRING SET',
      originalPrice: '$1199',
      discountedPrice: '$999',
      discount: '$200 OFF',
    },
    {
      image: '/media/assests/chain2.png',
      name: 'KUNDAN DIAMOND GOLD PLATED PANDAL & EARRING SET',
      originalPrice: '$1249',
      discountedPrice: '$1099',
      discount: '$150 OFF',
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Product Image */}
              <div className="w-full h-64 bg-teal-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Product Details */}
              <div className="text-center mt-4">
                <p className="text-sm font-semibold text-gray-800 uppercase">
                  {product.name}
                </p>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-lg font-bold text-gray-800">
                    {product.discountedPrice}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.originalPrice}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.discount})
                  </span>
                </div>
                {/* Icons */}
                <div className="flex justify-center items-center mt-2 space-x-4">
                  <FaHeart className="text-gray-500 cursor-pointer hover:text-red-500" />
                  <FaShoppingCart className="text-gray-500 cursor-pointer hover:text-teal-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-center mt-8">
            <img src="/media/assests/hrline2.png" />
          
        </div>
      </div>
    </div>
  );
}

export default Shop;