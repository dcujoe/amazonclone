import React, { Component }  from 'react';
import Home from './Home';
import Checkout from './Checkout';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
