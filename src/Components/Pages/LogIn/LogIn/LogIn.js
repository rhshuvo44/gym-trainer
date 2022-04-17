import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    LogIn
  </Button>
</Form>
        </div>
    );
};

export default LogIn;