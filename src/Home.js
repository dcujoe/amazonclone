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
                        <Product 
                        id="4365"
                        title="the blue bag with nice designs"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                        />
                        <Product 
                        id="4365"
                        title="the blue bag with nice designs"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>
                    </div>
                    <div className="home_row">
                       <Product 
                       id="4375"
                       title="nice product with cool features and best designs"
                       price={20.99}
                       rating={4}
                       image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                       />
                       <Product 
                       id="4360"
                       title="interesting book with inspiration"
                       price={30.55}
                       rating={3}
                       image="https://images-na.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_B01,204,203,200_QL40_FMwebp_.jpg"/>
                       <Product 
                       id="4365"
                       title="the blue bag with nice designs"
                       price={11.96}
                       rating={5}
                       image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                       />
                    </div>
                    <div className="home_row">
                        <Product 
                        id="2365"
                        title="nice product with cool features and best designs"
                        price={27.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>
                    </div>
                </div>

            </div>
        </div>
    );
}



