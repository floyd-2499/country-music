import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import logo from "./images/logo.svg";
import "./file-css/header.css";


const Header = (props) => {
  const { onAdd, cartitems, onRemove } = props;
  console.log(cartitems);
  return (
    <div className="header">

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navlinks">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      <div className="re">
        <div className="cart">
          <Link to={{
            pathname:"/cart",
              
                onAdd:{onAdd},
                cartitems:{cartitems},
                onRemove:{onRemove}
              
          }}>
            <i className="fab fa-opencart"></i>
          </Link>

        </div>
        <div className="login">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Header;
