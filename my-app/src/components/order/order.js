import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Order() {
  return (
    <>
    <Container>
        <Form>
            <Form.Group>
                <Form.Label>Do You Want Cookies Or A Cake?</Form.Label>
                <Form.Control as="select">
                    <option></option>
                    <option>Cookies</option>
                    <option>Cake</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>What Option Do You Want?</Form.Label>
                <Form.Control as="select">
                    <option></option>
                    <option>Round cookie cake with frosting around the edge with an optional message in the middle - $30</option>
                    <option>Round cookie cake with frosting around the edge and a cookie in the middle with an optional message - $35</option>
                    <option>Round cookie cake with frosting around the edge, six cookies around the perimeter, and a cookie in the middle with an optional message - $45</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>How Many Do You Want?</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>What Is The Occasion?</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Specifics</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" className="button">
                Submit
            </Button>
        </Form>
    </Container>
    </>
  );
}

export default Order;
