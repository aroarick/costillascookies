import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <>
    <Container className="nav-container">
      <Col lg={2}>
          <Image className="nav-item logo" src="costillascookieslogo.jpeg"></Image>
          <Button className="button">Order Online</Button>
          <Button className="nav-item">Menu and Prices</Button>
          <Button className="nav-item">Holiday Kits</Button>
          <Button className="nav-item">Gallary</Button>
          <Button className="nav-item">Reviews</Button>
          <Button className="nav-item">The Story</Button>
          <Button className="nav-item">Contact</Button>
      </Col>
    </Container>
    </>
  );
}

export default Navigation;
