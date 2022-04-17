import React from "react";
import { Button, Form, Row } from "react-bootstrap";

const Checkout = () => {
    const handleChakeOut=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="container py-5">
      <h1 className="mb-3">Checkout</h1>
      <div className="w-50 m-auto">
        <Form onSubmit={handleChakeOut}>
          <Row className="mb-3">
            <Form.Group  className="mb-3" controlId="formGridName">
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <div className="d-flex">
              <Form.Group controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </div>
          </Row>

          <Button className="w-50" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
