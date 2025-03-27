import React from 'react';


function product2() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mb-10">
        {/* Text Section */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-4xl font-serif text-teal-600 mb-4">Our Story</h1>
          <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
          <p className="text-gray-600 mb-4">
            Our story is one of passion, where every diamond is handpicked, every metal is ethereally shaped, and every design tells a unique story. It’s not just jewelry; it’s an heirloom that carries the legacy of beauty across generations.
          </p>
          <button className="text-teal-600 font-semibold flex items-center">
            Read More <span className="ml-2">→</span>
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 p-6">
          <div className=" rounded-lg p-4 flex justify-center">
            <img
             
             src="media\assests\jwellery-2.png "
             alt="image1"
            className="h-96 w-96"
           />
           
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-6xl">
        {/* Text Section */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-4xl font-serif text-teal-600 mb-4">About Us</h1>
          <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
          <p className="text-gray-600 mb-4">
            Amidst the sparkle and shimmer, our brand stands out with its commitment to capturing the essence of sophistication in every creation. Each piece is a testament to timeless beauty, meticulously crafted to adorn moments that matter.
          </p>
          <button className="text-teal-600 font-semibold flex items-center">
            Read More <span className="ml-2">→</span>
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 p-6">
          <div className=" rounded-lg p-4 flex justify-center">
            <img
             src="media\assests\jwellery-1.png "
             alt="image1"
             className="h-100 w-100 mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default product2;