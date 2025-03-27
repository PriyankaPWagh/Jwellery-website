import React, { useContext } from 'react';
import { WishlistCartContext } from './wishlistCartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist, setWishlist, cart, setCart } = useContext(WishlistCartContext);

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== productId);
      toast.info('Removed from wishlist');
      return updatedWishlist;
    });
  };

  const moveToCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.some((item) => item.id === product.id);
      if (isInCart) {
        toast.info(`${product.name} is already in your cart`);
        return prevCart;
      } else {
        toast.success(`${product.name} moved to cart`);
        return [...prevCart, product];
      }
    });
    // Optionally remove from wishlist after moving to cart
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.info('Wishlist cleared');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Wishlist</h2>
        {wishlist.length > 0 && (
          <button
            onClick={clearWishlist}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Clear Wishlist
          </button>
        )}
      </div>
      {wishlist.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 mb-4 text-lg">Your wishlist is empty.</p>
          <Link
            to="/shop"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                }}
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{item.category}</p>
                <h3 className="text-lg font-medium text-gray-800 mt-1 truncate">{item.name}</h3>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-800">${item.price}</span>
                  <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  <span className="text-sm text-red-500">(${item.discount} Off)</span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => moveToCart(item)}
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;