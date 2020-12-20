import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Reviews from "../reviews/reviews"


import "../../App.scss";

function Home() {
  return (
    <>
      <Row md={12}>
        <Col lg={7}>
          <Image className="home-main-image" fluid src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/125215631_1660172600809137_7669472092425016763_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=RXWU_iBSq1oAX-9Q0uI&_nc_ht=scontent-dfw5-1.xx&oh=a83922a22e31e5047fc1e80595cef06a&oe=6004D6DF"></Image>
        </Col>
        <Col md={5}>
          <h1>Costilla's Cookies</h1>
          <p className="intro-paragraph">My cookie business started when a neighbor reached out to others looking for a cookie baker.  I told her I'd give it a try and here I am! I do custom orders, cookie kits during the holidays and have even started cookie classes.</p>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        
        <Col></Col>
      </Row>
      <Row className="home-menu-row">
        <Reviews></Reviews>
      </Row>
    </>
  );
}

export default Home;
