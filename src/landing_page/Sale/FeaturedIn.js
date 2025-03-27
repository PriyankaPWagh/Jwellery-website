import React from 'react';

const FeaturedIn = () => {
  const brands = [
    { 
        name: 'Vogue',
        image: '/media/assests/Vogue.png',
    },
    {
         name: 'Studio Magazine',
         image: '/media/assests/SM.png',
     },
    {
            name: 'People',
            image: '/media/assests/people.png',
    },
    {
        name: 'elle',
        image: '/media/assests/elle.png',
    },
    {
        name: 'jw',
        image: '/media/assests/JW.png',
    },

    {
        name: 'jck',
        image: '/media/assests/JCK.png',
    },
    {
        name: 'sollitainaire',
        image: '/media/assests/sol.png',
    },
    
    
  ];

  return (
    <div className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-teal-600">Featured In</h2>
        <div className="flex justify-center mb-6">
        <img src="/media/assests/Hrline.png"  />
        </div>
        
      </div>

      {/* Brands Grid */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-30 ">
        {brands.map((brand, index) => (
          <div key={index}>
            <img 
                  src={brand.image}
                  alt={brand.name}
                 
                />
           
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default FeaturedIn;