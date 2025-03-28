import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>HOUSE PLANTS</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Shopping Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
