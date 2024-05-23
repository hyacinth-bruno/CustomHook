import React from 'react';
import './App.css';
import Country from './components/country/Country';
import Products from './components/product/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryDetails from './components/country/CountryDetails';
import ProductDetails from './components/product/ProductDetails';

function App() {
  return (
    <div className="App">
      <h1>Country and Product Information</h1>
      <Router>
        <Routes>
          <Route path="/" element={<><Country /><Products /></>} />
          <Route path="/countries/:name" element={<CountryDetails />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
