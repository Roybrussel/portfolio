import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigationbar.css";

const Navigationbar = () => {
  return (
    <Navbar className="justify-content-center navbar">
      <Nav>
        <Nav.Link href="#about" className="navlink">
          About
        </Nav.Link>
        <Nav.Link href="#projects" className="navlink">
          Projects
        </Nav.Link>
        <Nav.Link href="#contact" className="navlink">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
