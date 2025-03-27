import React from 'react';
import ShopProduct from './shopProduct';
import ShopHero from './shopHero';


function Shop() {
    return ( 
        <>
        <ShopHero/>
      <ShopProduct/>
      <div className="text-center h-12 relative top-4">
        <a href='http://localhost:3000/shop' className=' '>Back to top</a>
      </div>
        </>
     );
}

export default Shop;