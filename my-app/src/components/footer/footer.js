import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
        <Row className="footer-row">
            <Col className="footer-left">
                <p className="footer-header top-words">Costilla's Cookies</p>
                <br/>
                <p className="">555-555-555</p>
            </Col>
            <Col className="footer-center">
                <p className="top-words">123 Demo Street</p>
                <p>City, State Zip</p>
                <br/>
                <p>Open Monday - Friday</p>
                <p>9 - 5PM</p>
            </Col>
            <Col className="footer-right">
                <p className="top-words">Menu</p>
                <br/>
                <br/>
                <p>Order</p>
            </Col>
        </Row>
    </>
  );
}

export default Footer;
