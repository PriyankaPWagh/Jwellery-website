import React from "react";
import SaleImage from "./saleImage";  
import ShopByCatogory from "./ShopByCatogory";
import ShopByCollections from "./ShopByCollections";
import RingCollections from "./RingsCollection";
import ShopByGender from "./ShopByGender";
import CustomerLove from "./CustomerLove";
import FeaturedIn from "./FeaturedIn";
import Fetures from "./Features";
const Sale =()=>{
  return(
    <>
    <SaleImage/>
    <ShopByCatogory/>
    <ShopByCollections/>
    <RingCollections/>
    <ShopByGender/>
    <CustomerLove/>
    <FeaturedIn/>
    <Fetures/>
    </>
  )
} 

export default Sale;