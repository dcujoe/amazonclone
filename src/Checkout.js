import React from 'react';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

const Checkout = () => {
    return (
        <div>
            <Header />
            <div className="checkout">
                <div className="checkout-left">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt="" className="checkout-add" />

                    <h2 className="checkout-title">
                        Your Shopping Basket
                    </h2>
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct />
                </div>

                <div className="checkout-right">
                  <Subtotal />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
