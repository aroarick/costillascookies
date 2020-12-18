import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function cakeOrder() {
  return (
    <>
        <p className="order-questions">How many cakes do you want?</p>
        <Row>
            <Button className="order-cookies">1</Button>
            <Button className="order-cookies">2</Button>
            <Button className="order-cookies">3</Button>
            <Button className="order-cookies">4</Button>
            <Button className="order-cookies">5</Button>
        </Row>
        <p className="order-questions">What is the occasion?</p>
        <Row>
            <Button className="order-cookies">Birthday</Button>
            <Button className="order-cookies">Graduation</Button>
            <Button className="order-cookies">College Acceptance</Button>
            <Button className="order-cookies">Engagement</Button>
            <Button className="order-cookies">Bridal Shower</Button>
            <Button className="order-cookies">Wedding</Button>
            <Button className="order-cookies">Baby Shower</Button>
            <Button className="order-cookies">Anniversary</Button>
            <Button className="order-cookies">Valentine's Day</Button>
            <Button className="order-cookies">Easter</Button>
            <Button className="order-cookies">4th of July</Button>
            <Button className="order-cookies">Halloween</Button>
            <Button className="order-cookies">Thanksgiving</Button>
            <Button className="order-cookies">Christmas</Button>
            <Button className="order-cookies">New Years</Button>
        </Row>
        <p className="order-questions">What flavor(s) do you want?</p>
        <Row>
            <Col>
                <p className="order-questions">Regular</p>
                <Button className="order-cookies">Sugar</Button>
                <Button className="order-cookies">Chocolate</Button>
                <Button className="order-cookies">Chocolate Chip</Button>
                <Button className="order-cookies">Strawberry</Button>
            </Col>
            <Col>
                <p className="order-questions">Gluten Free</p>
                <Button className="order-cookies">Sugar</Button>
                <Button className="order-cookies">Chocolate</Button>
                <Button className="order-cookies">Chocolate Chip</Button>
                <Button className="order-cookies">Strawberry</Button>
            </Col>
        </Row>
        <p className="order-questions">What Cake Option Do You Want?</p>
        <Row>
            <Button className="order-cookies">Buttercream frosting around the outside with an optional message</Button>
            <Button className="order-cookies">Buttercream frosting around the outside and a sugar cookie in the middle with an optional message</Button>
            <Button className="order-cookies">Buttercream frosting around the outside with one sugar cookie in the middle with an optional message, and 6 sugar cookies around the perimeter of the cake.</Button>
        </Row>
        <p className="order-questions">What Color(s) do you want?</p>
        <Row>
            <p>color wheel</p>
        </Row>
        <Row>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="order-questions">Specifics</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Row>
        <Row>
            <Button className="order-cookies">Submit Order</Button>
        </Row>
    </>
  );
}

export default cakeOrder;
