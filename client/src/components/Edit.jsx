import React, { useState, useEffect } from "react";
import { Nav, Button } from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
// import { getPost } from '../components/api';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams();//grab the id for the blog id
    
  const { data: post } = useFetch(`/edit/${id}`);
  // console.log('data: posts from useFetch', post);
  const history = useHistory();
  const [input, setInput] = useState({
    title: '',
    imageUrl: '',
    content: '',
    // likeCount: Number,
    creator: '',
    tags: ''
});

const  handleChange = (event) => {
    const {name, value} = event.target;

    setInput(prevInput =>{
        return {
            ...prevInput,
            [name]: value,
        };
    });
    console.log(event.target);
};

const handleClick = (event) => {
    event.preventDefault();
    const newPost = {
        newTitle: input.title,
        newImageUrl: input.imageUrl,
        newContent: input.content,
        newTags: input.tags,
        // likeCount: input.likeCount,
        newCreator: input.creator
    };

    console.log('this is the newPost:', newPost);
    axios.post(`/edit/${id}`, newPost);     
    history.push('/');
    
}; 
    
    return (
        <div className="container">
           
            { post && (
            <div>                    
            <h1>Edit: {post.title}</h1>
            <form onSubmit={handleClick}>
                <div className='form-group'>Title:
                    <input name='title' onChange={handleChange} autoComplete='off' className='form-control' placeholder={`${post.title}`}></input>
                </div>
                <div className='form-group'>Content:
                    <input name='content' onChange={handleChange} autoComplete='off' className='form-control' placeholder={`${post.content}`}></input>
                </div>
                <div className='form-group'>Image:
                    <input name='imageUrl' onChange={handleChange} autoComplete='off' className='form-control' placeholder={`${post.imageUrl}`}></input>
                </div>
                <div className='form-group'>Creator:
                    <input name='creator' onChange={handleChange} autoComplete='off' className='form-control' placeholder={`${post.creator}`}></input>
                </div>
                <div className='form-group'>Tags:
                    <input name='tags' onChange={handleChange} autoComplete='off' className='form-control' placeholder={`#${post.tags}`}></input>
                </div>
                <Button type='submit' className='btn btn-large btn-info'>Submit</Button>
            </form>
            </div>
            )}
        </div>
      );
}
 
export default Edit;