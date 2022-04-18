import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Train = ({train}) => {
    const {name,body,img}=train;
    return (
        <div className="col-md-6">
            <Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {body}
    </Card.Text>
    <Button variant="primary">Go Training</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Train;