import React, { useRef, useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function UpdateProfile () {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    // const imageUrlRef = useRef()//this is a test, it may not work<------------------------------------
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }

        const promises = [];
        setLoading(true);
        setError('');
        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }
        // if(imageUrlRef.current.value) {
        //     promises.push(updateImageUrl(imageUrlRef.current.value));//this may not work, this is just a test for later
        // }

        Promise.all(promises).then(() => {
            history.push('/');
        }).catch(() => {
            setError('Failed to update account');
        }).finally(() => {
            setLoading(false);
        }); 
    }

    return (
        <>        
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {/* {currentUser.email}//this is for testing purposes and user logged in state is set with no errors */}
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} defaultValue={currentUser.email} required/>
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Leave blank to keep the same...' ref={passwordRef} />
                </Form.Group>
                <Form.Group id='email'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' placeholder='Leave blank to keep the same...' ref={passwordConfirmRef} />
                </Form.Group>

                {/* <Form.Group id='ImageUrl'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='ImageUrl' ref={imageUrlRef} placeholder='image goes here' required />
                </Form.Group> */}

                <Button disabled={loading} className='w-100' type='submit'>Update</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        <Link to='/'>Cancel</Link> 
        </div>
        </div>
        </Container>       
        </>
    )
}