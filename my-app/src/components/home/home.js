import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


import "../../App.scss";

function Home() {
  return (
    <>
      <Row md={12}>
        <Col>
          <Image className="home-main-image" fluid src="https://images.unsplash.com/photo-1595144780677-6d0b5abbd089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80"></Image>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={9}>
          <h1 className="intro-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, facere laboriosam earum cum, eos alias dignissimos aliquid eum, soluta libero corporis harum recusandae itaque. Officiis, voluptate. Cum ad quo dolorum.</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row className="home-menu-row">
        <Col md={6}>
          <Image fluid src="https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></Image>
        </Col>
        <Col>
          <h1 className="home-menu option">Menu</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="home-contact option">Contact</h1>
        </Col>
        <Col md={6}>
          <Image fluid src="https://images.unsplash.com/photo-1551529563-9dd66d188764?ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80"></Image>
        </Col>
      </Row>
    </>
  );
}

export default Home;
