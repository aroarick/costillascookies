import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook } from "react-icons/fa";

function Menu() {
  return (
    <>
        <h1 className="menu-cookie-title menu">Menu</h1>
        <Row>
            <Col>
                <p className="menu-cookie-title-cookies">Cookies</p>
            </Col>
            <Col>
                <p className="menu-cookie-title-cakes">Cakes</p>
            </Col>
        </Row>
        
        <h2 className="menu-cookie-title flavors">Flavors</h2>
        <p className="menu-cookie-flavor-option">SUGAR</p>
        <p className="menu-cookie-flavor-option">CHOCOLATE</p>
        <p className="menu-cookie-flavor-option">CHOCOLATE CHIP</p>
        <p className="menu-cookie-flavor-option">STRAWBERRY</p>
    </>
  );
}

export default Menu;
