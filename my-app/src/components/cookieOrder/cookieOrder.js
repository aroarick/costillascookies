import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function cookieOrder() {
  return (
    <>
    <Container>
        <h1>Order Cookies</h1>
    <Row>
        <Col>
            <p className="order-questions">How many cookies do you want?</p>
            <Form.Group>
                <Form.Control as="select">
                    <option className="order-cookies"></option>
                    <option className="order-cookies">1</option>
                    <option className="order-cookies">12</option>
                    <option className="order-cookies">24</option>
                    <option className="order-cookies">36</option>
                    <option className="order-cookies">48</option>
                </Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <p className="order-questions">What is the occasion?</p>
            <Form.Group>
                <Form.Control as="select">
                    <option className="order-cookies"></option>
                    <option className="order-cookies">Birthday</option>
                    <option className="order-cookies">Graduation</option>
                    <option className="order-cookies">College Acceptance</option>
                    <option className="order-cookies">Engagement</option>
                    <option className="order-cookies">Bridal Shower</option>
                    <option className="order-cookies">Wedding</option>
                    <option className="order-cookies">Baby Shower</option>
                    <option className="order-cookies">Anniversary</option>
                    <option className="order-cookies">Valentine's Day</option>
                    <option className="order-cookies">Easter</option>
                    <option className="order-cookies">4th of July</option>
                    <option className="order-cookies">Halloween</option>
                    <option className="order-cookies">Thanksgiving</option>
                    <option className="order-cookies">Christmas</option>
                    <option className="order-cookies">New Year's Day/Eve</option>
                    <option className="order-cookies">Specific</option>
                </Form.Control>
            </Form.Group>
            </Col>
        </Row>
    <Row>
        <Col>
            <p className="order-questions">What flavor(s) do you want</p>
            <Form.Group>
                <Form.Control as="select">
                    <option className="order-cookies"></option>
                    <option className="order-cookies">Sugar</option>
                    <option className="order-cookies">Chocolate</option>
                    <option className="order-cookies">Strawberry</option>
                    <option className="order-cookies">Chocolate Chip</option>
                    <option className="order-cookies">GF Sugar</option>
                    <option className="order-cookies">GF Chocolate</option>
                    <option className="order-cookies">GF Strawberry</option>
                    <option className="order-cookies">GF Chocolate Chip</option>
                </Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <p className="order-questions">What shape(s) do you want?</p>
            <Form.Group>
                <Form.Control as="select">
                    <option className="order-cookies"></option>
                    <option className="order-cookies">Circle</option>
                    <option className="order-cookies">Square</option>
                    <option className="order-cookies">Triangle</option>
                    <option className="order-cookies">Specific</option>
                </Form.Control>
            </Form.Group>
            </Col>
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
            <Button className="order-submit">Submit Order</Button>
        </Row>
        </Container>
    </>
  );
}

export default cookieOrder;
