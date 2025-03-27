import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Navbar from './landing_page/navbar';
import Homepage from './landing_page/Homepage';
import Footer from './landing_page/footer';
import Catogary from './landing_page/catogary/Catogary';
import Collections from './landing_page/collectons/Collections';
import Shop from './landing_page/shop/shop';
import Offers from './landing_page/offers/Offers';
import Giftstore from './landing_page/giftstore/giftstore';
import Notfound from './landing_page/not-found';
import Customer from './landing_page/CustomerLogin/customer';
import Signup from './landing_page/CustomerLogin/signup';
import Login from './landing_page/CustomerLogin/login';

import WishlistPage from './landing_page/wishlist/wishListPage';
import { WishlistCartProvider } from './landing_page/wishlist/wishlistCartContext';
import CartPage from './landing_page/wishlist/cartpage';
import CheckoutPage from './landing_page/wishlist/checkoutPage';
import OrderConfirmationPage from './landing_page/wishlist/orderConfirmationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WishlistCartProvider>
  <BrowserRouter> 
  <Navbar/>
  <Routes>
     <Route path="/" element={<Homepage/>}/>
      <Route path="/catogary" element={<Catogary/>}/>
   <Route path="/collections" element={<Collections/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/offers" element={<Offers/>}/>
    <Route path="/giftstore" element={<Giftstore/>}/>
    <Route path="/customer" element= {<Customer/>}/>
   
    <Route path="/wishlist" element={<WishlistPage/>}/>
    <Route path="/cartpage" element={<CartPage/>}/>
    <Route path="/login" element= {<Login/>}/>
    <Route path="/signup" element= {<Signup/>}/>
    <Route path="/checkout" element= {<CheckoutPage/>}/>
    <Route path="/orderConfirm" element= {<OrderConfirmationPage/>}/>
    <Route path="*" element={<Notfound/>}/>
    
    
        
      
       
      </Routes>
    
    
  <Footer/>
  </BrowserRouter>
  </WishlistCartProvider>
 );

