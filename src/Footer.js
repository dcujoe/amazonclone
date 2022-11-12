import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';
const Footer = () => {
     
        return (
            <>
            <div className="back-to-top">
                <a>Back to top</a> 
            </div>
            <div className="footer">
                <div className="footer-groups ab">
                    <h2>Get to know us</h2>
                    <a>Careers</a>
                    <a>Press Releases</a>
                    <a>About us</a>
                    <a>Blog</a>
                    <a>Sustainability</a>
                    <a>Amazon logisticblog</a>
                    <a>Imprint</a>
                    <a>Amazon Science</a>
                </div> 
                <div className="footer-groups ac">
                <h2>Make money with us</h2>
                    <a>Careers</a>
                    <a>Sell on Amazon</a>
                    <a>Sell on amazon business</a>
                    <a>Sell on Amazon Handmade</a>
                    <a>Associates Programme</a>
                    <a>Fulfillment by Amazon</a>
                    <a>Protect and build your brand</a>
                    <a>Seller Fulfilled Prime</a>
                    <a>Advertise your products</a>
                    <a>Independently Publish with Us</a>
                    <a>Amazon Pay</a>
                    <a>Host an Amazon Hub</a>
                    <a>See More Make Money with Us</a>
                </div>
                <div className="footer-groups ad">
                <h2>Amazon payment methods</h2>
                    <a>Shopping with points</a>
                    <a>Amazon Business Amex Card</a>
                    <a>credit cards</a>
                    <a>coupons</a>
                    <a>Monthly bill</a>
                    <a>direct debit</a>
                    <a>Amazon currency converter</a>
                    <a>Top up my Amazon Account</a>
                    <a>Top up Amazon locally</a>
                </div>
                <div className="footer-groups ae">
                <h2>Let us help you</h2>
                    <Link to="/">Sell on Amazon</Link>
                    <a>Sell on amazon business</a>
                    <a>Sell on Amazon Handmade</a>
                    <a>Associates Programme</a>
                    <a>Fulfillment by Amazon</a>
                    <a>Protect and build your brand</a>
                    <a>Seller Fulfilled Prime</a>
                    <a>Advertise your products</a>
                    <a>Independently Publish with Us</a>
                    <a>Amazon Pay</a>
                    <a>Host an Amazon Hub</a>
                    <a>See More Make Money with Us</a>

                </div>
            </div>
            </>
        );
    }



export default Footer;