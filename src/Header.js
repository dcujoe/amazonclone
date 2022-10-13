import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {
  // basket contains product details

  const [{basket}, dispatch] = useStateValue();
  // to see the number of items in the basket, use basket.length into the basket section of the
  //header


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
        <span className="nav_itemLinetwo nav_itemBasketcount">{basket.length}</span>
        </div>
        </Link>
      </div>
      </div>
    );
}

export default Header;
