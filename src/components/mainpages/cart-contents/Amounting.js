import React from "react";
import "./cart.css";

const Amounting = (props) => {


  return (

    <div className="am-container">

      <h1>SUBTOTAL</h1>
      <div className="large-line" />
      <div className="price">
        <div className="price-divs">
          <p>Items Price</p>
          {/* <p>INR {itemsPrice } </p> */}
        </div>
        <div className="price-divs">
          <p>Shipping Cost</p>-
          {/* <p>INR {shippingPrice}</p> */}
        </div>
        <div className="price-divs final-price">
          <p>Total Price</p>
          {/* <p> INR  {totalPrice} </p> */}
        </div>
      </div>
      <div className="large-line" />
      <div className="button-div">
          <button className="button"><p>Proceed Purchase</p></button>
      </div>

    </div>
  );
};

export default Amounting;
