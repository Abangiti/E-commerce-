import React, { useState } from 'react';
import './App.css'
import Home from './Home';
import Product from './product';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => setCurrentPage('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('product')}>Product</button>
          </li>
        </ul>
      </nav>

      {currentPage === 'home' && <Home />}
      {currentPage === 'product' && <Product />}

      
    </div>
  );
};

export default App;