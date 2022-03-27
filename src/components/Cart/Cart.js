import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { name }=props;
    return (
      <div>
        <h3>{name}</h3>
        
      </div>
    );
  };

export default Cart;
