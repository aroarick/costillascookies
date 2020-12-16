import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FaFacebook } from "react-icons/fa";

function Navigation() {
  return (
    <>
    <Navbar fluid className="navbar" bg="light" expand="lg">
      <Navbar.Brand href="/">Costilla's Cookies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto links">
          <Nav.Link href="/gallary">Gallary</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          {/* <Button  href="/order" className="nav-order button">Order</Button> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Navigation;
