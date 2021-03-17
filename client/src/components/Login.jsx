import React from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <div className="login-form">
            <Container>
            <Form>
                <Col xs={'auto'}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                    We'll never share your information with anyone else.
                    </Form.Text>
                </Form.Group>
                </Col>
                <Col xs={'auto'}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </Col>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="" />
                </Form.Group> */}
                <Col xs={'auto'}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Col>
                </Form>
                </Container>
        </div>
      );
}
 
export default Login;