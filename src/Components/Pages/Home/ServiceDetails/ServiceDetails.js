import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const navigate=useNavigate()
    const handleBooking=()=>{
        navigate('/checkout')
    }
    return (
        <div className='container'>
            <p>serviceId:{serviceId}</p>
            <Button onClick={handleBooking} variant="primary">Booking</Button>
        </div>
    );
};

export default ServiceDetails;