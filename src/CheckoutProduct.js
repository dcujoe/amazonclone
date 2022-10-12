import React from 'react';
import "./Checkout.css";

export default function CheckoutProduct({ id, image, title, price, rating }) {
    return (
        <div className="checkoutproduct">
            
            <img src="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg" 
            alt="checkout product image" className="checkout__ad" />

            <div className="product-info">
                <p className="checkout-title">
                    {title}
                </p>
                <p className="checkout-price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-rating">
                    ⭐️⭐️
                    <p>Remove from basket</p>
                </div>
            </div>
        </div>
    );
}


