import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const { state: orderDetails } = useLocation();

  if (!orderDetails) {
    return (
      <div className="p-6 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">No Order Found</h2>
        <p className="text-gray-500 mb-4">It looks like you haven't placed an order yet.</p>
        <Link
          to="/shop"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const { orderId, items, total, shippingDetails, date } = orderDetails;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Order Confirmation</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Thank You for Your Order!</h3>
        <p className="text-gray-600 mb-4">
          Your order has been placed successfully. You'll receive a confirmation email shortly.
        </p>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Order Details</h4>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Order Date:</strong> {new Date(date).toLocaleString()}</p>
          <p><strong>Total Amount:</strong> ${total}</p>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Shipping Details</h4>
          <p><strong>Name:</strong> {shippingDetails.name}</p>
          <p><strong>Email:</strong> {shippingDetails.email}</p>
          <p><strong>Address:</strong> {shippingDetails.address}, {shippingDetails.city}, {shippingDetails.state} {shippingDetails.zip}</p>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Items Ordered</h4>
          <div className="max-h-96 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h5 className="text-sm font-medium truncate">{item.name}</h5>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          to="/shop"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;