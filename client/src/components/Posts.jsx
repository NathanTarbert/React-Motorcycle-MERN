import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const Posts = () => { 
    // const { id } = useParams();//grab the id for the blog id   
    const [posts, setPosts] = useState([{
        title: '',
        imageUrl: '',
        content: '',
        creator: '',
        tags: [],
        createAt: ''
    }]);

    useEffect(() => {
        fetch('/posts')
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        })
        .then(jsonRes => setPosts(jsonRes))
        .catch(err => console.log(err));
    });

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
                <h1>These are your posts:</h1>
                </Container>
                {posts && posts.map(post => 
                <div>
                    <Container>
                   
                    <Card key={post._id}>
                    <Card.Img style={{ width: '30rem' }} variant="top" src={post.imageUrl} />
                    <Card.Body>
                    <Card.Title>Title: {post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <Card.Text>{post.creator}</Card.Text>
                    <Card.Text>Likes:{post.likeCount}</Card.Text>
                    <Card.Text>Tags:{post.tags}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{post.createAt}</small>
                    </Card.Footer>
                    </Card>
            
                  </Container>
                </div> 
                               
                
                )}
            </div>             
            ) 
}
 
export default Posts;