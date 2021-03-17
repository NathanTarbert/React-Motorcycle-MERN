import React, { useEffect, useState, Link } from 'react';
import { Card, Container } from 'react-bootstrap';
// import { Button } from './Button';

const Posts = () => { 
    // const { id } = useParams();//grab the id for the blog id   
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

    // const handleClick = () => {
    //     fetch('/notes' + notes.id, {
    //         method: 'DELETE'
    //     })
    //     .then(() => {
    //         console.log('the notepad has been deleted');
    //     });
    // };

    return  (  <div className='post-container'>  
                <Container>              
                <h1>Welcome:</h1>

                <button onClick={() => setCount(likeCount + 1)}>Likes: {likeCount}</button>

                </Container>
                {posts && posts.map(post => 
                <tr key={post._id}>
                    <Container>
                   
                    <Card key={post._id}>
                    <Card.Img style={{ width: '30rem' }} variant="top" src={post.imageUrl} />
                    <Card.Body>
                    <Card.Title>Title: {post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <Card.Text>{post.creator}</Card.Text>
                    <Card.Text>
                        <button onClick={() => setCount(likeCount + 1)}>
                        Likes:
                        </button><h2>{post.likeCount}</h2>
                       {/* <Link to={`/edit/${post._id}`}>Edit</Link> */}
                    </Card.Text>                        
                    <Card.Text>Tags: #{post.tags}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{post.createAt}></small>                  
                    </Card.Footer>
                    
                    </Card>
            
                  </Container>
                </tr> 
                               
                
                )}
            </div>             
            ) 
}
 
export default Posts;