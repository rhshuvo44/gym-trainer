import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";

const LogIn = () => {
    const navigate=useNavigate();
    const location=useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email,password)
    navigate(from, { replace: true });
  };
  
  const googleSingIn=()=>{
    signInWithGoogle()
}
  return (
    <div className="container py-5">
      <div className="w-50 m-auto">
        <h1>LogIn</h1>
        <Form onSubmit={handleLogin} className="my-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button className="w-50" variant="primary" type="submit">
            LogIn
          </Button>
        </Form>
        <p>
          Forget Password? <Link to="/login">Reset Password</Link>
        </p>
        <p>
          New to gym Trainer? <Link to="/register">Please Register</Link>
        </p>
        <button style={{border:'none'}} onClick={googleSingIn} className="w-50 mt-2 bg-primary text-white py-2"  type="submit">
          Google SignIn
        </button>
      </div>
    </div>
  );
};

export default LogIn;
