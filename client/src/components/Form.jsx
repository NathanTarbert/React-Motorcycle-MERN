import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';

export const Form = ({ post, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { 
        title: post ? post.title : '',
        content: post? post.content: '',
        imageUrl: post? post.imageUrl: '',
        creator: post? post.creator: '',
        tags: post? post.tags: '' 
    }
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <Container><label htmlFor="text">Form:</label></Container>
        <div className='container'>
            {/* <h1>Create Post Page</h1> */}
            <form>
                <div className='form-group'>
                    <input name='title' ref={register}  autoComplete='off' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <textarea name='content' ref={register}  autoComplete='off' className='form-control'></textarea>
                </div>
                <div className='form-group'>
                    <input name='imageUrl' ref={register}  autoComplete='off' className='form-control'></input>
                </div> 
                <div className='form-group'>
                    <input name='creator' ref={register}  autoComplete='off' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <input name='tags' ref={register}  autoComplete='off' className='form-control'></input>
                </div>               
                
                <Button type='submit' className='btn btn-large btn-info'>Post</Button>
            </form>
        </div>
      </div>
    </form>
  );
};