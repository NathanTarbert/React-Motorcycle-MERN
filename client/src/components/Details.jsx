import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Button, Card } from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import axios from 'axios';
import './Box.css';

const Details = () => {
    const { id } = useParams();//grab the id for the blog id
    // console.log('this is the id', id);   
    const { data: posts, error, isPending } = useFetch(`/details/${id}`);
    
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
            { posts && (
                <div className='post-container' style={{backgroundColor: '#d8d8e9'}}>
                    
                    <Card className='box-home-two' style={{width: '30rem', marginLeft: '500px', backgroundColor: 'white'}}>
                    <Container>
                    <Card.Img src={posts.imageUrl}  alt='motorcycle'/>
                   
                    <h2>{ posts.title }</h2>
                    <br></br>
                    <p>Written by { posts.creator }</p>
                    <div> { posts.content }</div>
                    <br></br>
                    <h4>Created at: { posts.createAt }</h4>
                    </Container>
                    </Card>
                    
                    {/* <button onClick={handleClick}>delete</button> */}
                    <Container style={{marginRight: '220px' }}>
                    <Button variant="primary-dark">
                        <Link to={`/edit/${posts._id}`}>
                            <Nav.Link href="edit">Edit</Nav.Link>
                        </Link>
                    </Button>
                    <Button onClick={handleDelete} variant="primary-dark">
                        <Link to={`/delete/${posts._id}`}>
                            <Nav.Link href="details">Delete</Nav.Link>
                        </Link>
                    </Button>
                    </Container>
                    
                </div>
            )}
        </div>
      );
}
 
export default Details;