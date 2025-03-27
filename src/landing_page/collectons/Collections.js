import React from 'react';

import BracellateCollection from './bracellateCollection';
import ProductHeader from './productHeader';

function Collections() {
    return ( 
        <>
       <BracellateCollection/>
        <ProductHeader/>
        <div className="text-center h-12 relative top-4">
        <a href='http://localhost:3000/collections' className=' '>Back to top</a>
      </div>
        </>
     );
}

export default Collections;