import React, { useState, useContext } from 'react';
import { WishlistCartContext } from './wishlistCartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const CheckoutPage = () => {
  const { cart, setCart } = useContext(WishlistCartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.state || !formData.zip) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Simulate payment processing
    toast.success('Payment processed successfully!');

    // Create order details
    const orderDetails = {
      orderId: `ORD-${Math.floor(Math.random() * 1000000)}`, // Simulated order ID
      items: cart,
      total: totalPrice,
      shippingDetails: formData,
      date: new Date().toISOString(),
    };

    // Clear the cart after successful checkout
    setCart([]);

    // Redirect to order confirmation page with order details
    navigate('/order-confirmation', { state: orderDetails });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Details Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="zip">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              <Link  class="nav-link" to="/orderConfirm">
              Place Order
        </Link >
            
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="max-h-96 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium truncate">{item.name}</h4>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Items:</span>
              <span className="font-medium">{cart.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-medium">${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;