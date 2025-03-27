import React from 'react';


function ShopByCollections() {
  // Array of categories with details
  const categories = [
    {
      image: '/media/assests/collection1.png',
      name: 'Earrings',
    },
    {
      image: '/media/assests/collection4.png',
      name: 'Finger Rings',
    },
    {
      image: '/media/assests/collection3.png',
      name: 'Pendants',
    },
    {
      image: '/media/assests/collection5.png',
      name: 'Nose Pins',
    },
   
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-serif text-teal-600 text-center mb-6">
          Shop By Collection
        </h2>
      
        <div className="flex justify-center mb-6">
        <img src="/media/assests/Hrline.png"  />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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

export default ShopByCollections;