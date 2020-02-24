import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { destroyLoggedInUser } from '../store/loggedInUser.slice';
import AuthService from '../api/auth.service';

const Header = () => {
  const dispatch = useDispatch();
  const { username, uri } = useSelector(
    (state) => state.loggedInUser
  );

  const handleSelect = async (event) => {
    if (event === 'logout') {
      await AuthService.logout();
      dispatch(destroyLoggedInUser());
    }
  };

  return (
    <Navbar bg="light" expand="lg" onSelect={handleSelect} className="header">
      <Navbar.Brand as={Link} to="/">TuneCache</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/users">Users Demo</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/search">Search</Nav.Link>
        </Nav>
        <Nav className="header-right-nav">
          {!username &&
            <ButtonToolbar>
              <Button as={Link} to="/login" variant="outline-secondary">Log In</Button>
              <Button as={Link} to="/signup" variant="primary" className="ml-2">Sign Up</Button>
            </ButtonToolbar>}
          {username &&
            <Nav >
            <Nav.Link as={Link} to="/playlists/create" variant="pills">Create Playlist</Nav.Link>
              <Nav.Link as={Link} to="/upload" variant="pills">Upload</Nav.Link>
              <NavDropdown title={username} className="header-right-dropdown">
                <NavDropdown.Item as={Link} to={`/users/${uri}`}>My Profile</NavDropdown.Item>
                <NavDropdown.Item eventKey={'logout'}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
