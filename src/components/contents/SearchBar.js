import React from "react";
import "./file-css/search.css";
// import { Link } from "react-router-dom";

const SearchBar = ({categories, filterItems }) => {
  function dropdown() {
    return (
      <div className="dropdown-content">
        {categories.map((category, index) => {
          return(
            <div className="a" key={index} onClick={() => filterItems(category)}>
           {category}
          </div>
          )
        })}
      </div>
    );
  }

  return (
    <div className="scontainer">
      <div className="search">
        <div className="dropdown">
          <button className="dropbtn" >
            <p className="all">ALL</p>
            <i className="fas fa-caret-down"></i>
          </button>
        

        <div className="input-drop dropdown">
          <input
            type="text"
            placeholder="Filter Instruments"
            className="search dropbtn"
          />
          {dropdown()}
        </div>
        </div>
        <p className="search-icon">
          <i className="fas fa-search"></i>
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
