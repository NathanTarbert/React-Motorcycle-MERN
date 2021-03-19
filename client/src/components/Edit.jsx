import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const CreatePost = () => {
    const history = useHistory();
    const [input, setInput] = useState({
        title: '',
        imageUrl: '',
        content: '',
        likeCount: '',
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
        const newNote = {
            title: input.title,
            imageUrl: input.imageUrl,
            content: input.content,
            tags: input.tags,
            likeCount: input.likeCount,
            creator: input.creator
        };
        
        axios.post('/edit', newNote);
        history.push('/');
    };

    return (
        <div className='container'>
            <h1>Edit Page</h1>
            <form>
                <div className='form-group'>
                    <input onChange={handleChange} name='title' value={input.title} autoComplete='off' className='form-control' placeholder='title here...'></input>
                </div>
                <div className='form-group'>
                    <textarea onChange={handleChange} name='content' value={input.content} autoComplete='off' className='form-control' placeholder='note content...'></textarea>
                </div>
                <div className='form-group'>
                    <input onChange={handleChange} name='imageUrl' value={input.imageUrl} autoComplete='off' className='form-control' placeholder='image here...'></input>
                </div> 
                <div className='form-group'>
                    <input onChange={handleChange} name='creator' value={input.creator} autoComplete='off' className='form-control' placeholder='creator here...'></input>
                </div>
                <div className='form-group'>
                    <input onChange={handleChange} name='tags' value={input.tags} autoComplete='off' className='form-control' placeholder='tags here...'></input>
                </div>               
                
                <button onClick={handleClick} className='btn btn-large btn-info'>Add Note</button>
            </form>
        </div>
      );
}
 
export default CreatePost;