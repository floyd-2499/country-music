import React, { useState } from "react";
import Header from "../contents/Header";
import Footer from "../contents/Footer";
import SearchBar from "../contents/SearchBar";
import Menu from "../contents/Menu";
import items from "./Data/data";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const Instrulist = () => {
  const [cartitems, setcartitems] = useState([]);

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const onAdd = (product) => {
    const exist = cartitems.find((x) => x.id === product.id);
    if (exist) {
      setcartitems(
        cartitems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartitems([...cartitems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartitems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartitems(cartitems.filter((x) => x.id !== product.id));
    } else {
      setcartitems(
        cartitems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  console.log(cartitems);

  return (
    <div className="display-page">
      <Header onAdd={onAdd} onRemove={onRemove} cartitems={cartitems} />
      <SearchBar categories={categories} filterItems={filterItems} />
      <Menu
        items={menuItems}
        onAdd={onAdd}
        onRemove={onRemove}
        cartitems={cartitems}
      />
      <Footer />
    </div>
  );
};

export default Instrulist;
