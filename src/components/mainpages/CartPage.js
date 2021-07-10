import React from "react";
import Header from "../contents/Header";
import Footer from "../contents/Footer";
import Amounting from "./cart-contents/Amounting";
import ItemDisplay from "./cart-contents/ItemDisplay";
import "./cart-contents/cart.css";

class CartPage extends React.Component {

  componentDidMount() {
    const {cart} = this.props.match.params;
    const {onAdd} = this.props.location.onAdd;
    const {onRemove} = this.props.location.onRemove;
    const {cartitems} = this.props.location.cartitems;

    console.log(cartitems);
  }


  render(){
    
  return (
    <div className="cart-page">
      <Header />
      <div className="cart-content">
        <ItemDisplay />
        <Amounting />
      </div>
      <Footer />
    </div>
  );
  }

};

export default CartPage;
