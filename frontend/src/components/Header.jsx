import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <Link to="/">Product Catalogue</Link>
      <Link to="/place-order">Place Order</Link>
      <Link to="/track-order">Track Order</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </nav>
  );
}

export default Header;
