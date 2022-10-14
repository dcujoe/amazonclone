import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
    // get whole of the basket in the data layer
    const [{basket}, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText = {(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>€{value}</strong>
                </p>
                
                <small className="subtotal-gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandsSeparator={true}
            
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
