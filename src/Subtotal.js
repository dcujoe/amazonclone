import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText = {(value) => (
                <>
                <p>
                    Subtotal (0 items): <strong>$0</strong>
                </p>
                
                <small className="subtotal-gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            />
        </div>
    );
}

export default Subtotal;
