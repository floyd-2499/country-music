import React from "react";
import "./file-css/menu.css";
// import CartPage from "../mainpages/CartPage";
// import { BrowserRouter, Route } from "react-router-dom";

const Product = (props) => {
  const { product, onAdd} = props;
  

  return (
    <div className="box">
      <div className="image-sec">
        <img src={product.img} alt={product.model} />
      </div>
      <div className="item-desc">
        <h3>{product.model}</h3>
        <h3>{product.item}</h3>
      </div>
      <div className="rating">
        <img src={product.stars} alt="stars" />
      </div>
      <h5 className="small">{/* for a line */}</h5>
      <div className="price">
        <h4> ₹ {product.price}.00</h4>
        <p>
          <del> ₹{product.mrp}</del>
        </p>
      </div>
      <div className="discount">
        <p>Save {product.discount}% </p>
      </div>
      <h5 className="small">{/* for a line */}</h5>
      <div className="button-div">
        <div className="button" onClick={() => onAdd(product)}>
          <small>Add to cart</small>
        </div>
      </div>
    </div>
  );
};

export default Product;
