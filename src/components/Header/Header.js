import React from "react";
import Navigationbar from "./Nav/Navigationbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navigationbar />
      <div class="header-container">
        <h1 className="header-name">ROY</h1>
        <h1 className="header-name">ARNE</h1>
        <h1 className="header-name">BRUSSEL</h1>
      </div>
    </header>
  );
};

export default Header;
