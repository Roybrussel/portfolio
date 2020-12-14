import React from "react";
import Navigationbar from "./Nav/Navigationbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navigationbar />
      <div class="header-container">
        <h1>ROY</h1>
        <h1>ARNE</h1>
        <h1>BRUSSEL</h1>
      </div>
    </header>
  );
};

export default Header;
