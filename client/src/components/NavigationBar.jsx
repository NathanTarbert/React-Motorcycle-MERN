import React from 'react';
// import { Button } from './Button';
import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from 'react-router-dom';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

  const NavigationBar = () => {
    return (
       <> 
       <Container>
        <Navbar collapseOnSelect expand={'lg'} bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create Post</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        </Navbar>
        </Container>
        <br />
      </>
    )
}

export default NavigationBar
