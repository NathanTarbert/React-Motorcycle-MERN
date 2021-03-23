import React, { useEffect, useState } from 'react';
import { Card, Container, Button, Nav} from 'react-bootstrap';
import { Link  } from "react-router-dom";
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
        likeCount: Number,
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

        const renderCard = (card, index) => {
            return  (  
            <div className='post-container' key={card._id}>  
               <Card>
                <Card.Img style={{width: '35rem'}} variant="top" src={card.imageUrl} />
                <Container>
                <Button variant="outline-secondary">
                <Link to={`/details/${card._id}`}><Nav.Link  href="#details">Details</Nav.Link></Link>
                </Button>{' '}
                <Button variant="outline-secondary" onClick={() => setCount(likeCount + 1)}>Likes: <h2>{card.likeCount}</h2>
                </Button>
                </Container>
                <Card.Body>
                <Card.Text>{card.title}</Card.Text>
                </Card.Body>
               
                
                </Card>
            </div>             
            ) 
        }
        return <div className='grid'>{posts.map(renderCard)}</div>
       
}
 
export default Posts;

