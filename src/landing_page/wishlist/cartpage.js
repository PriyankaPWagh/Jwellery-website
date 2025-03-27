import React, { useContext } from 'react';
import { WishlistCartContext } from './wishlistCartContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, setCart } = useContext(WishlistCartContext);
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      toast.info('Removed from cart');
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Cart cleared');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty. Add items to proceed to checkout.');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Clear Cart
          </button>
        )}
      </div>
      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 mb-4 text-lg">Your cart is empty.</p>
          <Link
            to="/shop"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cart.map((item) => (
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
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total Items:</span>
              <span className="font-medium">{cart.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-medium">${totalPrice}</span>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
                 <Link  class="nav-link" to="/checkout">
                 Proceed to Checkout
        </Link >
              
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;