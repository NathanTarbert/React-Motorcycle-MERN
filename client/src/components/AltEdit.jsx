import React, { useState, useEffect } from "react";
import { Nav, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { getPosts, editPost } from '../components/api';
import axios from 'axios';

const Edit = () => {
    const [post, setPost] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newCreator, setNewCreator] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newTags, setNewTags] = useState('');
    const history = useHistory();
    const { id } = useParams();
    console.log(id);

    const editPost = async () => {
        const { data } = await axios.get(`http://localhost:3001/edit/${id}`);
        console.log("this is the date from axios edit post get ", data);
        setPost(data);
    };

    useEffect(() => {
        editPost();
    },[]);

    // const { data: post, error } = useFetch(`/edit/${id}`);
    // console.log('this is coming from useFetch in /edit', post);
    const handleSubmit = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        //this is grabbing the populated post object from the form input
        const newPost = { newTitle, newContent, newImageUrl, newCreator, newTags };
        console.log(newPost);
        //this is to your express server port NOT REACT server port
        axios.post(`http://localhost/3001/edit/${id}`, newPost);
        //this fires the get all api so when index renders, the new post appears without hitting refresh
        getPosts();
        history.push('/');
    };
    return (
        <div className="container">
            { post && (
                <div>                     
                <Container fluid="sm" className="form">
                <Row>
                    <Col>
                        <Form onSubmit ={handleSubmit}>
                        <Form.Group>
                            <Form.Label><h2>{ post.title }</h2></Form.Label>
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
                        {/* <Form.Group>
                            <Form.Label>ImageUrl</Form.Label>
                            <Form.Control 
                            type="title" placeholder={`${post.imageUrl}`}
                            onChange={(e) => setNewImageUrl(e.target.value)}
                            />
                        </Form.Group> */}
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control 
                            type="tags" placeholder={`${post.tags}`}
                            onChange={(e) => setNewTags(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
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