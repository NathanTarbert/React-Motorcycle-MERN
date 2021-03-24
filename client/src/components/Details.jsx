import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Button, Card } from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import axios from 'axios';
import './Box.css';

const Details = () => {
    const { id } = useParams();//grab the id for the post id
    // console.log('this is the id', id);   
    const { data: post, error, isPending } = useFetch(`/details/${id}`);
    
    const history = useHistory();//get the history object

    // const handleClick = () => {
    //     fetch(`/${posts._id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(() => {
    //         history.push('/');//re-routes the user back to the home page
    //     });
    // };

    const handleDelete = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        axios.get(`/delete/${id}`);
        //this fires the get all api so when index renders, the new post appears without hitting refresh
        // getTees();
        history.push('/');
    };

    return (
        <div style={{textAlign: "center", fontSize: '1.5rem'}} className="posts-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { post && (
                <div className='post-container'>
                     <Card style={{ width: '45rem', marginLeft: '380px' }} key={post._id} className="box-home">
                     <Card.Title>{post.title}</Card.Title>
                    <Card.Img Image variant="top" src={post.imageUrl} />
                    <Card.Body>
                        
                        <Card.Text>{post.content}</Card.Text>
                        <Link to={`/edit/${post._id}`}>
                            <Button variant="primary" size="lg" >Edit</Button>{' '}
                            </Link>
                            <Link to={`/delete/${post._id}`}>
                            <Button variant="primary" size="lg" onClick={handleDelete}>Delete</Button>
                            </Link>
                    </Card.Body>
                    </Card>
                    
                </div>
            )}
        </div>
      );
}
 
export default Details;