import React from 'react';
import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={ Link } to="/">TuneCache</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={ Link } to="/users">Users Demo</Nav.Link>
          <Nav.Link as={ Link } to="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Button as={ Link } to="/signup" variant="primary">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
