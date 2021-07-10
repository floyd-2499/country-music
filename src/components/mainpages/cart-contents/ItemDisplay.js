import React from "react";
import {useDispatch} from "react-redux";
import {actionTypes} from "../../../actions/Cart/actions";

const ItemDisplay = (props) => {
  const {product} = props;
  return (
      <div className="box">
        <div className="image-sec">
          <img src={product.image} alt={product.model} />
        </div>
        <div className="item-desc">
          <h3>{product.brand}</h3>
          <h3>{product.model}</h3>
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
      </div>
  );
};

export default ItemDisplay;
