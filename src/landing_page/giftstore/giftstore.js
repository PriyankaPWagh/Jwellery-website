import React from 'react';
import GiftingGuide from './giftingGuide';
import SpecialGift from './specialGift';
import GiftByOccassion from './giftByOccassion';
import LillianGiftCard from './lillianGiftCard';
import SpecialGift2 from './specialGift2';
import TalkToExpert from './talkToExpert';
function Offers() {
    return ( 
        <>
     
       <GiftingGuide/>
       <SpecialGift/>
       <GiftByOccassion/>
       <LillianGiftCard/>
       <SpecialGift2/>
       <TalkToExpert/>
       <div className="text-center h-12 relative top-4">
        <a href='http://localhost:3000/giftStore' className=' '>Back to top</a>
      </div>
        </>
     );
}

export default Offers;