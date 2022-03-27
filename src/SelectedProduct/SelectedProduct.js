// import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./SelectedProduct.css";

const SelectedProduct = ({ item }) => {
    console.log(item);
  const { img, name, price } = item;
  return (
    <div className="Product">
      <img src={img} alt="" />
      <div className="food-info">
        <p className="food-name">Name: {name}</p>
        <p className="food-price">price: ${price}</p>
      </div>
     
    </div>
  );
};

export default SelectedProduct;
