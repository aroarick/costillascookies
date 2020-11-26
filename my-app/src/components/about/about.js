import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import { FaFacebook } from "react-icons/fa";

function About() {
  return (
    <Row>
      <Col md={6}>
        <Image
          fluid
          className="image"
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/105973288_1528321963994202_8830579490018594973_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=vurEG1_NgTMAX-lAfsV&_nc_ht=scontent-dfw5-2.xx&oh=bb2a0235e846f05e9978df7e5ae33a1c&oe=5F7D0B1D"
        ></Image>
      </Col>
      <Col>
        <Row className="allyns">
          <h1>
            About <span className="title">Me</span>
          </h1>
          <p>
            My name is Amy Costilla. I am happily married and have two boys. We
            have lived in Melissa for 8 years but have been in the area for 12.
            <br />
            My cookie business is officially 3 years old! (But, I've been baking
            and decorating with my boys since they were born.) It all started
            when a neighbor reached out to others looking for a cookie baker. I
            told her I'd give it a try and here I am! <br />I am a full time
            teacher, so during the school year my cookie business takes back
            seat a little. When I retire, this will be my full time gig! I have
            21 years of teaching already, so it's closer than I think! <br />
            My cookie business is operated out of my house. I am a Texas Cottage
            and operate under the Texas Cottage Food Law.
          </p>
          <Button className="breadbutton" href="/shop">
            VIEW THE BREADS <span className="arrow"> &#8594;</span>
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default About;
