import React from "react";
import Hero from "./home/Hero";
import Product from "./product/Product";
import Sale from "./Sale/sale";




function Homepage(){
    return(
        <>
        <Hero/>
        
        <Product/>
        <Sale/>
        <div className="text-center h-12 relative top-4">
        <a href='http://localhost:3000' className=' '>Back to top</a>
      </div>
        
        </>




    );
       
    
}

export default Homepage;