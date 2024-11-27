import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductCatalogue from './pages/ProductCatalogue';
import OrderPlacement from './pages/OrderPlacement';
import OrderTracking from './pages/OrderTracking';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductCatalogue />} />
        <Route path="/place-order" element={<OrderPlacement />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
