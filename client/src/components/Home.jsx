import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';

const Posts = () => { 
    // const { id } = useParams();//grab the id for the blog id  
    // console.log('the id is', id); 
    const [posts, setPosts] = useState([{
        title: '',
        imageUrl: '',
        content: '',
        creator: '',
        tags: [],
        createAt: '',
        likeCount: []
    }]);

    useEffect(() => {
        fetch('/posts')//localhost:3001/
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        })
        .then(jsonRes => setPosts(jsonRes))
        .catch(err => console.log(err));
    },[]);

        const [likeCount, setCount] = useState(0);

    return  (  
            <div className='post-container'>  
                <Container>              
                <h1>Welcome:</h1>

                <button onClick={() => setCount(likeCount + 1)}>Likes: {likeCount}</button>

                </Container>
                {posts && posts.map(post => 
                <div className='post-list' key={post._id}>
                    <Container>
                   
                    <Card>
                    <Card.Img style={{ width: '30rem' }} variant="top" src={post.imageUrl} alt='motorcycle' />
                    <Card.Body>
                    <Card.Title>Title: {post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <Card.Text>{post.creator}</Card.Text>
                    <Card.Text>
                        <button onClick={() => setCount(likeCount + 1)}>
                        Likes:
                        </button><h2>{post.likeCount}</h2>
                        <button>
                        <Link to={`/details/${post._id}`}>
                            <ReactBootstrap.Nav.Link href="#details">Details</ReactBootstrap.Nav.Link>
                        </Link>
                        </button>
                    </Card.Text>                        
                    <Card.Text>Tags: #{post.tags}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{post.createAt}></small>                  
                    </Card.Footer>
                    
                    </Card>
            
                  </Container>
                </div>                              
                
                )}
            </div>             
            ) 
}
 
export default Posts;