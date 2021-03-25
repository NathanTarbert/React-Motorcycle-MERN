import React, { useState, useEffect } from "react";
import { Nav, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
// import { getPosts } from '../components/api';
// import axios from 'axios';

const Edit = () => {
    //post/setpost holds the existing object returned by mdb to populate form on page load
    // const [post, setPost] = useState('');
    const { id } = useParams();
    console.log(id);
    const { data: post, error, isPending } = useFetch(`/edit/${id}`);

    const handleSubmit = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        //this is grabbing the populated post object from the form input
        const newPost = { newTitle, newContent, newImageUrl, newCreator, newTags };
        console.log('this is newPost',newPost);

        // setIsPending(true);
        fetch('/edit/'+ id, {
            method: 'Post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(newPost)
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }else {
                console.log('~this is the response error',res);
            }
        })
        .then((jsonRes) => {
            console.log('new edit posted', jsonRes);
            // setIsPending(false);
            history.push('/');
        })
        .catch(err => {
            console.log(err);
            // setIsPending(false);
        });
    };

    //these are to hold the edited/updated form data and load the obj sent to post request
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newCreator, setNewCreator] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newTags, setNewTags] = useState('');
    //redirects page to specified url
    const history = useHistory();
    //id taken from url for use in requests
   

    

    //this return the form with populated data from get request
    //onchange events grab new data typed in form to update item
    return (
        <div className="container">
           { post && (
                    <div>
                    {/* <h1>This is your Edit page {post.title}</h1>                 */}
                    <Container fluid="sm" className="form">
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                type="title" placeholder={`${post.title}`}
                                onChange={(e) => setNewTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Content</Form.Label>
                                <Form.Control 
                                as="textarea" rows={5} placeholder={`${post.content}`}
                                onChange={(e) => setNewContent(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Creator</Form.Label>
                                <Form.Control 
                                type="Creator" placeholder={`${post.creator}`}
                                onChange={(e) => setNewCreator(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>ImageUrl</Form.Label>
                                <Form.Control 
                                type="title" placeholder={`${post.imageUrl}`}
                                onChange={(e) => setNewImageUrl(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tags</Form.Label>
                                <Form.Control 
                                type="tags" placeholder={`${post.tags}`}
                                onChange={(e) => setNewTags(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                            <Link to={`/`}>
                            <Button variant="secondary" size="lg" >Home</Button>{' '}
                            </Link>
                            <Button type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>                     
            )}
        </div>
    )
};
export default Edit;