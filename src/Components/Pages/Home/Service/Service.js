import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name,img,body,price}=service
    const navigate=useNavigate();
    const handleBooking=()=>{
      navigate('/checkout')
    }
    return (
        <div className='col-sm-12 col-md-4'>
            <Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title className='text-uppercase'>{name}</Card.Title>
    <Card.Text>
      {body}
      
    </Card.Text>
    <Card.Title>Price : ${price}</Card.Title>
    <Button onClick={handleBooking} variant="primary">Booking</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;