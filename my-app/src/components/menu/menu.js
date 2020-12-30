import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Menu() {
  return (
    <>
        <h1 className="menu-cookie-title menu">Menu</h1>
        <p>Everything on the menu is either customizable or partially customizable. </p>
        <Button className="button">Cookies</Button>
        <Button className="button">Cakes</Button>
        <Button className="button">Kits</Button>

        <Row>
          <Col>
            <h1>Flavours</h1>
            <p>Sugar</p>
            <p>Chocolate</p>
            <p>Strawberry</p>
            <p>Chocolate Chip</p>
            <p>Gluten Free Sugar</p>
            <p>Gluten Free Chocolate</p>
            <p>Gluten Free Strawberry</p>
            <p>Gluten Free Chocolate Chip</p>
          </Col>
          <Col>
            <h1>Prices</h1>
            <p>$3 each or $36 per dozen</p>
          </Col>
        </Row>
    </>
  );
}

export default Menu;
