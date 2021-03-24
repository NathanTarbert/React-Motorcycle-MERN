import React, { useEffect, useState } from 'react';
import { Card, Container, Button, Nav} from 'react-bootstrap';
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
    },[posts]);

        const [likeCount, setCount] = useState(0);

        const renderCard = (card, index) => {
            return  ( 

                <Card className="box-home" style={{ width: '22rem', height: '24rem' }} key={card._id} >               
                <Card.Body>                
                    <Card.Title>{card.creator}</Card.Title>
                    <Card.Img variant="top" style={{width: '19rem'}} src={card.imageUrl} />
                    <br></br>
                    <Card.Text>{card.content}</Card.Text>   
                    <Link to={`/details/${card._id}`}>
                    <Button variant="primary">Details</Button>{' '}
                    <Button variant="primary" onClick={() => setCount(likeCount + 1)}>Likes: <h2>{card.likeCount}</h2></Button>
                    </Link>                    
                </Card.Body>
                </Card>


            
            //    <Card className='box-home' style={{width: '28rem'}} key={card._id}>
            //     <Card.Img variant="top" src={card.imageUrl} />
            //     {/* <Container>
            //     </Container> */}
            //     <Link to={`/details/${card._id}`}><Button variant="outline-secondary"></Button>{' '}
            //     <Button variant="outline-secondary" onClick={() => setCount(likeCount + 1)}>Likes: <h2>{card.likeCount}</h2></Button>                
            //     <Card.Body>
            //     <Card.Text>{card.title}</Card.Text>
            //     </Card.Body>          
                
            //     </Card>
                       
            ) 
        }
        return <div className='grid'>{posts.map(renderCard)}</div>
       
}
 
export default Posts;

