import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Register = () => {
  const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,user,error
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle,user1,error1] = useSignInWithGoogle(auth);
    const handleSignup=(e)=>{
        e.preventDefault()
        const email =e.target.email.value;
        const password =e.target.password.value
        createUserWithEmailAndPassword(email, password);   
    }
    let errorElement;
    if (error || error1) {
      errorElement=<div>
      <p className='text-danger'> {error?.message} {error1?.message}</p>
      </div>
    }
    if(user || user1){
      navigate('/home')
    }
    const googleSingIn=()=>{
        signInWithGoogle()
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
          <Form.Control name='email' type="email" placeholder="Enter Email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
       
        {errorElement}
     <Button className="w-50 mt-2" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>Allready have an account? <Link to='/login'>Please Login</Link></p>
      <button style={{border:'none'}} onClick={googleSingIn} className="w-50 mt-2 bg-primary text-white py-2"  type="submit">
          Google SignIn
        </button>
      </div>
        </div>
    );
};

export default Register;