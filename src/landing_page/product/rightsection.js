import React from "react";


function RightSection ()    
{
    return(
        <div className=" flex justify-around item-center">
    


      
       
        <div className="">
          <img
            src="media\assests\jwellery-2.png "
            alt="image1"
           className="h-96 w-96"
          />
        </div>
        <div className="text-center max-w-2xl mx-auto py-10">
      {/* Heading */}
      <h2 className="text-5xl font-serif text-teal-600">About Us</h2>
      <div className="w-20 h-1 bg-[#F4B41A] mx-auto mt-2"></div>
        {/* Description */}
      <p className="text-gray-700 mt-4 px-4">
        Amidst the sparkle and shimmer, our brand stands out with its commitment to capturing the 
        essence of sophistication in every creation. Each piece is a testament to timeless beauty, 
        meticulously crafted to adorn moments that matter.
      </p>

      {/* Read More Button */}
      <div className="mt-6">
        <button className="text-gray-700 font-medium flex items-center justify-center gap-2 mx-auto">
          Read More <span className="text-lg">→</span>
        </button>
      </div>

        
        
    </div>
    </div>
  );
}

export default RightSection;