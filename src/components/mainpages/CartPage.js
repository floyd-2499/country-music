import React, {useEffect, useState} from "react";
import Header from "../contents/Header";
import Footer from "../contents/Footer";
import Amounting from "./cart-contents/Amounting";
import ItemDisplay from "./cart-contents/ItemDisplay";
import "./cart-contents/cart.css";

function CartPage() {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cart-items')))
    }, [])
  return (
    <div className="cart-page">
      <Header />
      <div className="cart-content">
          {
              cartItems?.map(product => {
                  return (
                      <ItemDisplay product={product} />
                  )
              })
          }
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
