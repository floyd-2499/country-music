import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landingpage from "./mainpages/Landingpage";
import About from "./mainpages/About";
import Contact from "./mainpages/Contact";
import CartPage from "./mainpages/CartPage";
import Instrulist from "./mainpages/Instrulist";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Landingpage} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        {/* <Route path="/cart" exact component={CartPage} /> */}
        <Route path="/cart" >
          <CartPage />
        </Route>
        <Route path="/instruments" exact component={Instrulist} />
      </BrowserRouter>
    </div>
  );
};

export default App;
