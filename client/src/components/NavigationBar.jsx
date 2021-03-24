import React, { useState } from 'react';
// import { Button } from './Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Alert } from 'react-bootstrap';

  const NavigationBar = () => {
    // const [error, setError] = useState('');
    // function handleLogout(){

    // }
    return (
       <> 
       <Container>
        <Navbar collapseOnSelect expand={'lg'} bg="dark" variant="dark" className='navbar'>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/create">Create Post</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to='/profile'>Profile</Link>
          {/* <Link to="/login" onClick={handleLogout}>Log Out</Link> */}
        </Nav>
        <Form inline>
           {/* {error && <Alert variant='danger'>{error}</Alert>} */}
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Link to={'/search'}>
          <Button variant="outline-info">Search</Button>
          </Link>
        </Form>
        </Navbar>
        </Container>
        <br />
      </>
    )
}

export default NavigationBar
