import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCatalogue() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Product Catalogue</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong>: ${product.pricePerUnit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalogue;
