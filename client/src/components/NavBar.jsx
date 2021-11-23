import React, { useState } from 'react';
// import { Button } from './Button';
import * as ReactBootstrap from 'react-bootstrap';
import { NavLink, useHistory, } from 'react-router-dom';
import { Card, Alert, Button } from 'react-bootstrap';
import './Navbar.css';
import './Box.css';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
  // const [error, setError] = useState('');
  // const { logout } = useAuth();
  // const history = useHistory();

  // async function handleLogout() {
  //   if(error){
  //     setError('');
  //   }    

  //   try {
  //     await logout();
  //     history.push("/login");
  //   } catch(error) {
  //     setError("Failed to log out", error);
  //   }
  // } 

  return ( 
    <ReactBootstrap.Navbar bg="primary" expand="lg">
    <ReactBootstrap.Navbar.Brand className='logo' href="/">MOTO HOME</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      {/* <Link to="/">
        <ReactBootstrap.Nav.Link href="/">Posts</ReactBootstrap.Nav.Link>
      </Link> */}
      <NavLink to="/create">
        <ReactBootstrap.Nav.Link href="#create">Create Post</ReactBootstrap.Nav.Link>
      </NavLink>
      <NavLink to="/about">
        <ReactBootstrap.Nav.Link href="#about">About</ReactBootstrap.Nav.Link>
      </NavLink>
    {/* <Link to="/edit">
    <ReactBootstrap.Nav.Link href="#edit">Edit</ReactBootstrap.Nav.Link>
    </Link> */}
      <NavLink to="/signup">
        <ReactBootstrap.Nav.Link href="#signup">Register</ReactBootstrap.Nav.Link>
      </NavLink>
      <NavLink to="/login">
        <ReactBootstrap.Nav.Link href="#login">Login</ReactBootstrap.Nav.Link>
      </NavLink>
      {/* <Link to='/login'>
        <ReactBootstrap.Nav.Link onClick={handleLogout}>Logout</ReactBootstrap.Nav.Link>
      </Link> */}
      <NavLink to="/profile">
        <ReactBootstrap.Nav.Link href="#profile">Profile</ReactBootstrap.Nav.Link>
      </NavLink>
    
    {/* <Card><Card.Body>{error && <Alert variant="danger">{error}</Alert>}</Card.Body></Card> */}

    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
    <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <ReactBootstrap.Button variant="outline-light">Search</ReactBootstrap.Button>
        {/* <Link variant="link" onClick={handleLogout}>
            Log Out
        </Link> */}
    </ReactBootstrap.Form>
    </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
);
}

export default NavBar;
