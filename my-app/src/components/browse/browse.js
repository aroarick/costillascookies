import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "../../App.scss";

function Browse() {
  return (
    <>
      <Row>
        <Col>
          <Button className="main-button">Custom Cookies</Button>
        </Col>
        <Col>
          <Button className="main-button">Bundle Cookies</Button>
        </Col>
      </Row>
    </>
  );
}

export default Browse;
