import React from 'react';


function ShopByCatogory() {
  // Array of categories with details
  const categories = [
    {
      image: '/media/assests/shop1.png',
      name: 'Earrings',
    },
    {
      image: '/media/assests/shop2.png',
      name: 'Finger Rings',
    },
    {
      image: '/media/assests/shop3.png',
      name: 'Pendants',
    },
    {
      image: '/media/assests/shop4.png',
      name: 'Nose Pins',
    },
    {
      image: '/media/assests/shop5.png',
      name: 'Chains',
    },
    {
      image: '/media/assests/shop6.png',
      name: 'Bracelets',
    },
    {
      image: '/media/assests/shop7.png',
      name: 'Bangles',
    },
    {
      image: '/media/assests/shop8.png',
      name: 'Neckwear',
    },
    {
      image: '/media/assests/shop9.png',
      name: 'Watch Jewelry',
    },
    {
      image: '/media/assests/shop10.png',
      name: 'Ankle Wear',
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-serif text-teal-600 text-center mb-6">
          Shop By Category
        </h2>
      
        <div className="flex justify-center mb-6">
        <img src="/media/assests/Hrline.png"  />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Category Image */}
              <div className="w-full h-40 rounded-lg overflow-hidden">
              <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Category Details */}
              <div className="text-center mt-2">
                <p className="text-sm font-semibold text-gray-800 uppercase">
                  {category.name}
                </p>
                <a
                  href="#"
                  className="text-teal-600 text-sm font-semibold flex items-center justify-center mt-1 hover:underline"
                >
                  Explore <span className="ml-1">→</span>
                </a>
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

export default ShopByCatogory;