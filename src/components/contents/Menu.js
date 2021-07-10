import React from "react";
import review from "./images/review.svg";
import "./file-css/menu.css";
import Product from "./Product";

const Menu = ({ items, cartitems, onAdd, onRemove }) => {
  console.log(cartitems);
  return (
    <div className="menu-container">
      <div className="side-bar">
        <div className="brands">
          <h1>Top Brands</h1>
          <h5 className="small">{/* for a line */}</h5>

          <p>YAMAHA</p>
          <p>Casio</p>
          <p>Roland</p>
          <p>Akai</p>
          <p>Juârez</p>
          <p>Kadence</p>
          <p>Behringer</p>
          <p>Pearl</p>
          <p>Havana</p>
          <p>Tama</p>
        </div>

        <h5 className="large">{/* line */}</h5>

        <div className="instru-request">
          <h1> Instrument </h1>
          <h1> Request</h1>
          <h5 className="small">{/* for a line */}</h5>

          <div className="request-form">
            {/* on submit => clear input and give a alert */}
            <input type="text" placeholder="Insrtument Name" />
            <p> -- or -- </p>
            <input type="text" placeholder="Model Name" />
            <p> -- or -- </p>
            <input type="text" placeholder="Brand Name" />
            <p>-- and-- </p>
            <input
              className="desc"
              type="text"
              placeholder="Product Desciption"
            />
          </div>
        </div>

        <h5 className="large">{/* line */}</h5>

        <div className="reviews">
          <h1>Rewiews</h1>
          <h5 className="small">{/* for a line */}</h5>

          <img src={review} alt="review" />
        </div>
        <h5 className="large">{/* line */}</h5>
      </div>

      <div className="menu-display">
        {items.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              onAdd={onAdd}
              onRemove={onRemove}
              cartitems={cartitems}
            ></Product>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
