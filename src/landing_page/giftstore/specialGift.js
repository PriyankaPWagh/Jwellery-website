import React from 'react';
import giftImage from './speicalGift.png'; 

function SpecialGift() {
  return (
    <div className=" bg-[#fff] flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full   overflow-hidden gap-50">
        {/* Left Section */}
        <div className="flex-1 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#008FAB] leading-tight">
            A special gift for your loved ones.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Give the gift of adornment and celebrate special moments with our exquisite collection.
          </p>

          {/* Input and Button */}
          <div className="mt-6 flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter gift code..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-[#008FAB] text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
              Redeem
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#008FAB]">1000+</span>
              <span className="text-gray-600">Gifts Delivered</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#008FAB]">5000+</span>
              <span className="text-gray-600">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1">
          <img
            src={giftImage}
            alt="Gift giving scene"
            className="w-full h-full object-cover  p-4"
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialGift;