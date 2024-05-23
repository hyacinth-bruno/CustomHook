
import React from 'react';
import './App.css';
import Country from './components/country/Country';
import Products from './components/product/Products';

function App() {
  return (
    <div className="App">
      <h1>Country and Product Information</h1>
      <Country />
      <Products />
    </div>
  );
}

export default App;
