import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTile from './components/productTile/productTile';

function App() {
  return (
    <div className="App">
      <ProductTile
      name="test"
      description="description"
      price={19.99}
      discount={20}
      rating={4.6}
      image="https://dev.bg/wp-content/uploads/2021/09/s4-v1-black-46x40.png"></ProductTile>
    </div>
  );
}

export default App;
