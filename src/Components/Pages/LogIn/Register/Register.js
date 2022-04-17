import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword
      ] = useCreateUserWithEmailAndPassword(auth);
      
    const handleSignup=(e)=>{
        e.preventDefault()
        const email =e.target.email.value;
        const password =e.target.password.value
        createUserWithEmailAndPassword(email, password);
        
    }
    return (
        <div className='container py-5'>
            <div className="w-50 m-auto">
            <h1>Please Register</h1>
      <Form onSubmit={handleSignup} className="my-3">

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control  type="text" placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name='email' type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
       
  
     <Button className="w-50 mt-2" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>Allready have an account? <Link to='/login'>Please Login</Link></p>
      </div>
        </div>
    );
};

export default Register;