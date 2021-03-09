import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const CreateNotes = () => {
    const history = useHistory();
    const [input, setInput] = useState({
        title: '',
        content: '',
        author: ''
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
            content: input.content,
            author: input.author
        };
        
        axios.post('/create', newNote);
        history.push('/notes');
    };

    return (
        <div className='container'>
            <h1>Create Notes Page</h1>
            <form>
                <div className='form-group'>
                    <input onChange={handleChange} name='title' value={input.title} autoComplete='off' className='form-control' placeholder='title here...'></input>
                </div>
                <div className='form-group'>
                    <textarea onChange={handleChange} name='content' value={input.content} autoComplete='off' className='form-control' placeholder='note content...'></textarea>
                </div>
                {/* <div className='form-group'>
                    <input onChange={handleChange} name='imageUrl' value={input.imageUrl} autoComplete='off' className='form-control' placeholder='image here...'></input>
                </div>  */}
                <div className='form-group'>
                    <input onChange={handleChange} name='author' value={input.author} autoComplete='off' className='form-control' placeholder='author here...'></input>
                </div>              
                
                <button onClick={handleClick} className='btn btn-large btn-info'>Add Note</button>
            </form>
        </div>
      );
}
 
export default CreateNotes;