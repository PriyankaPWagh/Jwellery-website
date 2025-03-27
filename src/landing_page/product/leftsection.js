import React from "react";


function LeftSection () 
{
    return(
        <div className=" flex  justify-around items-center h-[450px]">
     
       
        
        <div className=" col-5 mt-5 p-5 ">
          <h2 className="text-[#008FAB] text-[66px] text-center   producth2">Our Story</h2>
          <div className="w-50 h-1 mx-auto bg-[#F4B41A] mb-5"></div>
          <p className="mt-5">
          Our Story is one of passion,where every diamond
        is handpicked,every metal is ethereally<br/> shaped,and every design tesll
        a unique story.It's not just jwellery;it's an heriloom thtt carries<br/>
        the legacy of beauty across generation"
            </p>
           
           <p>Learn More</p>
       
    
      </div>



      <div className="">
          <img
            src="media\assests\jwellery-1.png "
            alt="image1"
            className="h-100 w-100 mt-5"
          />
        </div>
    </div>


    
  );
}

export default LeftSection;
