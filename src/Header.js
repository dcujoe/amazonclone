import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = ({ id, title, image, price }) => {
  // basket contains product details

  const [{basket}, dispatch] = useStateValue();
  // to see the number of items in the basket, use basket.length into the basket section of the
  //header

  const addToBasket = () => {
    // dispatch is the javascript object that indicates the action to be done
    dispatch({
        type: "ADD_TO_BASKET",
        item: { id: id, title: title, image: image, price: price },
    })
}


    return (
      <>
        <div className="header">
          <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>
       <h2 className="header_logoTitle">Kode49</h2>
        </div>
          </Link>
        

      <div className="header_search">
        <input type="text" className="headerSearch" />
        <div className="headerSearch_icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</div>
      </div>
      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="nav_item">
        <span className="nav_itemLineone">Hello Guest</span>
        <span className="nav_itemLinetwo">Sign In</span>
        </div>
        </Link>
        <div className="nav_item">
        <span className="nav_itemLineone">Your</span>
        <span className="nav_itemLinetwo">Shop</span>
        </div>
        <Link to="/Checkout" style={{ textDecoration: "none" }}>
        <div className="nav-itemBasket">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
        <span className="nav_itemLinetwo nav_itemBasketcount" onClick={addToBasket}>{basket.length}</span>
        </div>
        </Link>
      </div>
      </div>

      <div className="row-after-header">
      </div>
      </>
    );
}

export default Header;
