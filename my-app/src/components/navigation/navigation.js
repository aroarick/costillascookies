import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-item" href="/menu">Menu and Prices</Nav.Link>
            <Nav.Link className="nav-item" href="/kits">Holiday Kits</Nav.Link>
            <Nav.Link className="nav-item" href="/gallary">Gallary</Nav.Link>
            <Nav.Link className="nav-item" href="/reviews">Reviews</Nav.Link>
            <Nav.Link className="nav-item" href="/about">The Story</Nav.Link>
            <Nav.Link className="nav-item" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Navigation;
