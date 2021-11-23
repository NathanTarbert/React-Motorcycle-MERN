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
    // console.log(post.createAt);
    
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
                <div className='box-home' style={{marginLeft: '50px', marginRight: '50px', marginTop: '50px', backgroundColor: 'rgb(184, 156, 149)'}}>                   
                     <Card style={{ width: '45rem', height: '52rem', marginLeft: '380px' }} key={post._id} className="box-home">
                     <Card.Title style={{color: 'white', fontWeight: 'bold'}}>{post.creator}</Card.Title>
                     <Card.Title style={{backgroundColor: 'AciveBorder'}}>{post.title}</Card.Title>
                        <Card.Img Image variant="top" src={post.imageUrl} />
                        <Card.Body className='card-body card-body1'>
                        
                        <Card.Text style={{backgroundColor: 'ActiveBorder'}}>{post.content}</Card.Text>
                        <Card.Text style={{backgroundColor:'ActiveCaption'}}>Date Created: {post.createAt}</Card.Text>
                        <Link to={`/edit/${post._id}`}>
                            <Button variant="secondary" size="lg">Edit</Button>{' '}
                            </Link>
                            <Link to={`/delete/${post._id}`}>
                            <Button variant="secondary" size="lg" onClick={handleDelete}>Delete</Button>
                            </Link>
                    </Card.Body>
                    </Card>                    
                </div>
            )}
        </div>
      );
}
 
export default Details;