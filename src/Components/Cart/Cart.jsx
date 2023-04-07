import React from 'react';
import './cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    let massege;
    if(cart.length === 0){
        massege = <p>please add some product</p>
    }
    return (
        <div>
            <h1>order summry </h1>
            {
                cart.map(tshirs => <p key={tshirs._id}>{tshirs.name} <button onClick={()=> handleRemoveCart(tshirs._id)}>X</button></p> )
            }
        </div>
    );
};

export default Cart;