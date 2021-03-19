import React, { useState, useEffect } from "react";
import  {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import useFetch from "./useFetch";
import { getPost } from '../components/api';

const Details = () => {
    const { id } = useParams();//grab the id for the blog id
    console.log('this is the id', id);
    const [post, setPost] = useState();
    const match = useRouteMatch();
    const { data: posts, error, isPending } = useFetch(`/details/${id}`);
    console.log('this is the post', id);
    const history = useHistory();//get the history object

    const handleClick = () => {
        fetch(`/details/${posts.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');//re-routes the user back to the home page
        });
    };

    useEffect(() => {
        const fetchPost = async () => {
          const post = await getPost(id);
        //   console.log('post', post.id);
          setPost(post);
        };
        fetchPost();
      }, []);

    return (
        <div style={{textAlign: "center", fontSize: '1.5rem'}} className="posts-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { post && (
                <div>
                    <img src={post.imageUrl} alt='motorcycle'/>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.creator }</p>
                    <div> { post.content }</div>
                    <button onClick={handleClick}>delete</button>
                    <button>
                        <Link to={`/edit/${post.id}`}>
                            <Nav.Link href="edit">Edit</Nav.Link>
                        </Link>
                    </button>
                </div>
            )}
        </div>
      );
}
 
export default Details;