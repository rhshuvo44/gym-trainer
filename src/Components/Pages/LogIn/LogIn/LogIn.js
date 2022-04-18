import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../../firebase.init";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user,loading,
    error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


  if (user || user1) {
    navigate(from, { replace: true });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const restPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please your email");
    }
  };
  const googleSingIn = () => {
     signInWithGoogle();
  };
  return (
    <div className="container py-5">
      <div className="w-50 m-auto">
        <h1>LogIn</h1>
        <Form onSubmit={handleLogin} className="my-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <ToastContainer />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button className="w-50" variant="primary" type="submit">
            LogIn
          </Button>
          
        </Form>
        {
          error && <p className="text-danger">{error.message}</p>
        }
        <p>
          Forget Password?{" "}
          <button className="btn btn-link" onClick={restPassword}>
            Reset Password
          </button>
        </p>
        <p>
          New to gym Trainer? <Link to="/register">Please Register</Link>
        </p>
        <button
          style={{ border: "none" }}
          onClick={googleSingIn}
          className=" mt-2 bg-primary text-white p-2"
          type="submit"
        >
          Google SignIn
        </button>
      </div>
    </div>
  );
};

export default LogIn;
