import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function cookieOrder() {
  return (
    <>
        <Row>
            <p className="order-questions">How many cookies do you want?</p>
        </Row>
        <Row>
            <Button className="order-cookies">1</Button>
            <Button className="order-cookies">12</Button>
            <Button className="order-cookies">24</Button>
            <Button className="order-cookies">36</Button>
            <Button className="order-cookies">48</Button>
            <Button className="order-cookies">More</Button>
        </Row>
    </>
  );
}

export default cookieOrder;
