import React from "react";
import headerData from "./headerData";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-section">{}Logo</div>
      <div className="right-section">
        {headerData.map((item, index) => (
          <button key={index} onClick={() => console.log(item.link)}>
            {item.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
