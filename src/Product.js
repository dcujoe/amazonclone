import './Product.css'
import React from 'react';

export default function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>Title</p>
                <p className="product_price">$30</p>
                <small></small>
                <div className="product_rating"></div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" 
            alt="product_image" />
            <button>Add to basket</button>
        </div>
    );
}


