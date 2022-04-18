import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut=()=>{
    signOut(auth);
  }
  
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home">Gym-Trainer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link as={Link} to="/service">Services</Nav.Link>
      <Nav.Link as={Link} to="/training">Training</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>

    {
      user ? <button style={{border:'none', backgroundColor:'transparent',color:'gray'}} onClick={logOut}>LogOut</button>
      :<Nav.Link as={Link} to="/login">
      LogIn
    </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;