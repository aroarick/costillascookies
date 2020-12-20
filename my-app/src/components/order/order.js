import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Order() {
  return (
    <>
    <Container>
        <Row>
            <Col>
                <Button className="order-buttons">Kits</Button>
            </Col>
            <Col>
                <Button href="/cookieOrder" className="order-buttons">Cookies</Button>
            </Col>
            <Col>
                <Button href="/cakeOrder" className="order-buttons">Cakes</Button>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default Order;
