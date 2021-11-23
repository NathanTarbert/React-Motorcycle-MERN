import React, { useEffect, useState } from 'react';
import { Card, Button, Image, Col} from 'react-bootstrap';
import { Link  } from "react-router-dom";
// import * as ReactBootstrap from 'react-bootstrap';
import './Box.css';

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
        likeCount: [],
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
    },[posts]);

        const [likeCount, setCount] = useState(0);

        const renderCard = (card) => {
            return  (                
                <Card className="box-home"  key={card._id} style={{ borderRadius: '20px', backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fd%2F9%2Ff%2F118466-cool-neutral-background-1920x1200-large-resolution.jpg&f=1&nofb=1)'}} >               
                <Card.Body>                
                    <Card.Title style={{backgroundColor: 'crimson', marginRight: '20px', fontWeight: '400', borderRadius: '3px'}}>Rider: {card.creator}</Card.Title>
                    <br></br>
                    <Col xs={6} md={4}>
                    <Image src={card.imageUrl} style={{width: '17rem', marginLeft: '50px'}} rounded/>
                    </Col>
                    <br></br><br></br>
                    <Card.Text>{card.content}</Card.Text>   
                    <Link to={`/details/${card._id}`}>
                    <Button variant="primary">Details</Button>{' '}
                    </Link><br></br>
                    <Button variant="primary" onClick={() => setCount(likeCount + 1)}>Likes: <h2>{card.likeCount}</h2></Button>
                    
                    <Card.Text style={{backgroundColor: 'crimson', marginRight: '20px', fontWeight: '400', borderRadius: '3px'}}>Tags: {card.tags}</Card.Text>                    
                </Card.Body>
                </Card>                        
            ) 
        }
        return(
                <div className='grid'>
                    {posts && posts.map(renderCard)}
                </div>
        ); 
       
};
 
export default Posts;

