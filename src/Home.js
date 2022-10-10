import React from 'react';
import Product from './Product'
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="homeImage" className="home_image" />
                  {/* want two products in this row*/}
                    <div className="home_row">
                        <Product />
                        <Product />
                    </div>
                    <div className="home_row">
                       <Product />
                       <Product />
                       <Product />
                    </div>
                    <div className="home_row">
                        <Product />
                    </div>
                </div>

            </div>
        </div>
    );
}



