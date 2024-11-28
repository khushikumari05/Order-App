import React, { useState } from 'react';
import axios from 'axios';

function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const fetchOrder = () => {
    axios.get(`http://localhost:5000/api/orders/${orderId}`)
      .then((response) => setOrder(response.data))
      .catch(() => alert('Order not found'));
  };

  return (
    <div>
      <h1>Track Order</h1>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={fetchOrder}>Track</button>
      {order && (
        <div>
          <h2>Order Details</h2>
          <p>Status: {order.status}</p>
          <ul>
            {order.items.map((item) => (
              <li key={item.productId}>
                Product: {item.productId} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderTracking;
