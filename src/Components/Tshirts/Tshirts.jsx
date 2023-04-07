import React from 'react';
import './tshirt.css'


const Tshirts = ({tshirt, handdleAddToCart}) => {
    const {picture , name , price, id} = tshirt
    return (
        <div className='t-shirts'>
            <img src={picture} alt="" srcset="" />
            <h4>{name}</h4>
            <p>price: {price}</p>
            <button onClick={() => handdleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirts;