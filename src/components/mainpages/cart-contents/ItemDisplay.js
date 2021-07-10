import React from "react";
import "./cart.css";

const ItemDisplay = (props) => {
  return (
    <div>
      
    </div>
    // <div className="ID-container">
    //   {cartitems.map((item) => {
    //     return (
    //       <div key={item.id} className="row">
    //         <div className="col-2">{item.name} </div>
    //         <div className="col-2">
    //           <button onClick={() => onAdd(item)} className="add">
    //             +
    //           </button>
    //           <button onClick={() => onRemove(item)} className="remove">
    //             -
    //           </button>
    //         </div>
    //         <div className="col-2 text-right">
    //           {item.qty} X ${item.price.toFixed(2)}
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default ItemDisplay;
