import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
          <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
        <StorefrontIcon className="headerLogo_image" fontSize="large" />
       <h2 className="header_logoTitle">AmaClon</h2>
        </div>
          </Link>
        

      <div className="header_search">
        <input type="text" className="headerSearch" />
        <SearchIcon className="headerSearch_icon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
        <span className="nav_itemLineone">Hello Guest</span>
        <span className="nav_itemLinetwo">Sign In</span>
        </div>
        <div className="nav_item">
        <span className="nav_itemLineone">Your</span>
        <span className="nav_itemLinetwo">Shop</span>
        </div>
        <Link to="/Checkout" style={{ textDecoration: "none" }}>
        <div className="nav-itemBasket">
        <ShoppingBasketIcon fontSize="large" />
        <span className="nav_itemLinetwo nav_itemBasketcount">0</span>
        </div>
        </Link>
      </div>
      </div>
    );
}


