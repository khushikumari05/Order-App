import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderPlacement() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({
    buyerName: '',
    contactInfo: '',
    deliveryAddress: '',
    items: [],
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/orders', order)
      .then(() => alert('Order placed successfully!'))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Place Order</h1>
      <input
        type="text"
        placeholder="Name"
        value={order.buyerName}
        onChange={(e) => setOrder({ ...order, buyerName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Contact Info"
        value={order.contactInfo}
        onChange={(e) => setOrder({ ...order, contactInfo: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Delivery Address"
        value={order.deliveryAddress}
        onChange={(e) => setOrder({ ...order, deliveryAddress: e.target.value })}
        required
      />
      <h2>Order Items</h2>
      {products.map((product) => (
        <div key={product._id}>
          <label>{product.name}</label>
          <input
            type="number"
            min="0"
            placeholder="Quantity"
            onChange={(e) => {
              const quantity = Number(e.target.value);
              const updatedItems = order.items.filter(item => item.productId !== product._id);
              if (quantity > 0) {
                updatedItems.push({ productId: product._id, quantity });
              }
              setOrder({ ...order, items: updatedItems });
            }}
          />
        </div>
      ))}
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default OrderPlacement;
