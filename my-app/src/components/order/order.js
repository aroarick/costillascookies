import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Order() {
  return (
    <>
        <Row>
            <Col>
                <Button className="order-buttons">Kits</Button>
            </Col>
            <Col>
                <Button href="/cookieOrder" className="order-buttons">Cookies</Button>
            </Col>
            <Col>
                <Button className="order-buttons">Cakes</Button>
            </Col>
        </Row>
        <Row>

        </Row>
    </>
  );
}

export default Order;
