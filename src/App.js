import React from 'react';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
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
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
