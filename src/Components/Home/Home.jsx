import React, { useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Tshirts from "../Tshirts/Tshirts";
import Cart from "../Cart/Cart";
import toast from 'react-hot-toast';
const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handdleAddToCart = (tshirts) => {
    const exists = cart.find(ts => ts._id === tshirts._id);
    if (exists) {
      toast('Here is your toast.');
    } else {
      const newCart = [...cart, tshirts];
      setCart(newCart);
    }
  };

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirts
            key={tshirt._id}
            tshirt={tshirt}
            handdleAddToCart={handdleAddToCart}
          ></Tshirts>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
