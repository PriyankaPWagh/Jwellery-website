import React, { createContext, useState, useEffect } from 'react';

export const WishlistCartContext = createContext();

export const WishlistCartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistCartContext.Provider value={{ cart, setCart, wishlist, setWishlist }}>
      {children}
    </WishlistCartContext.Provider>
  );
};