import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Main.css";
import SelectedProduct from "../../SelectedProduct/SelectedProduct";


const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch("data.JSON")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    const addToCart = (product) => {
        console.log(product);
      const matchProduct = cart.find((item) => item.id === product.id);
      if (matchProduct) {
        alert("This Item has been already added");
      } else if (cart.length >= 4) {
        alert("You can not add more then 4 items");
      } else {
          const newCart = [...cart, product];
          setCart(newCart);
    }
    };
    console.log(cart);
    const randomOne = () => {
      const random = cart[Math.floor(Math.random() * cart.length)];
      const newCarts = [random];
      setCart(newCarts);
    };
    const resetButton = () => {
      const reset = [];
      setCart(reset);
    };
    return (
      <div className="container">
        <div className="product-container">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart}></Product>
          ))}
        </div>
        <div className="cart-container ms-3 p-2">
          {cart.map((item) => (
           <SelectedProduct key={item.id} item={item}></SelectedProduct>
          ))}
          <button className="me-2 btn btn-info text-white" onClick={randomOne}>
            <p>Choose one</p>
          </button>
          <button className="btn btn-danger text-white" onClick={resetButton}>
            <p>Choose Again</p>
          </button>
        </div>
        
      </div>
    );
  };
  
export default Main;
