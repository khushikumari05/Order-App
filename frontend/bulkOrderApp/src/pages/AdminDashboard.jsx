import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders')
      .then((response) => setOrders(response.data))
      .catch((error) => console.error(error));
  }, []);

  const updateOrderStatus = (id, status) => {
    axios.put(`http://localhost:5000/api/orders/${id}/status`, { status })
      .then(() => {
        setOrders(orders.map(order => order._id === id ? { ...order, status } : order));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <p>Buyer: {order.buyerName}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => updateOrderStatus(order._id, 'In Progress')}>In Progress</button>
            <button onClick={() => updateOrderStatus(order._id, 'Delivered')}>Delivered</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
