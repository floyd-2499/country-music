import React from "react";
import "./file-css/footer.css";
import logo from "./images/logo.svg";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="part-a">
        <div className="address">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="adtext">
            <p>+91 9740250911</p>
            <p> instrumental@keyworld.com </p>
            <p> Mangalore, India </p>
          </div>
        </div>
        <div className="social">
          <div className="text">CONNECT WITH US</div>
          <div className="icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>

      <div className="part-b">
        <p>© Country Music 2021 | Designed by Floyd Manuel</p>
      </div>
    </div>
  );
};

export default Footer;
