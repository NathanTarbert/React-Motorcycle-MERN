import React from "react";
import { Nav, Button } from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
    const { id } = useParams();//grab the id for the blog id
    // console.log('this is the id', id);   
    const { data: posts, error, isPending } = useFetch(`/${id}`);
    
    const history = useHistory();//get the history object

    const handleClick = () => {
        fetch(`/${posts._id}`, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');//re-routes the user back to the home page
        });
    };

    return (
        <div style={{textAlign: "center", fontSize: '1.5rem'}} className="posts-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { posts && (
                <div>
                    <img src={posts.imageUrl} alt='motorcycle'/>
                    <h2>{ posts.title }</h2>
                    <p>Written by { posts.creator }</p>
                    <div> { posts.content }</div>
                    <h4>Created at: { posts.createAt }</h4>
                    {/* <button onClick={handleClick}>delete</button> */}
                    <Button variant="outline-secondary">
                        <Link to={`/edit/${posts._id}`}>
                            <Nav.Link href="edit">Edit</Nav.Link>
                        </Link>
                    </Button>
                    <Button onClick={handleClick} variant="outline-secondary">
                        <Link to={`/${posts._id}`}>
                            <Nav.Link href="details">Delete</Nav.Link>
                        </Link>
                    </Button>
                </div>
            )}
        </div>
      );
}
 
export default Details;