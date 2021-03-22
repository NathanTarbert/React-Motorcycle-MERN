import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import useFetch from './useFetch';
import { useParams } from "react-router-dom";

const { id } = useParams();
const { data: post, error, isPending } = useFetch(`/${id}`);

  return (
    <form>
      <div className="form-group">
        <Container><label htmlFor="text">Form:</label></Container>
        <div className='container'>
          
            <form>
                <div className='form-group'>
                    <input name='title'  autoComplete='off' className='form-control' placeholder={`${post.title}`}></input>
                </div>
                {/* <div className='form-group'>
                    <textarea name='content' ref={register}  autoComplete='off' className='form-control' placeholder={post.content}></textarea>
                </div>
                <div className='form-group'>
                    <input name='imageUrl' ref={register}  autoComplete='off' className='form-control'placeholder={post.imageUrl}></input>
                </div> 
                <div className='form-group'>
                    <input name='creator' ref={register}  autoComplete='off' className='form-control' placeholder={post.creator}></input>
                </div>
                <div className='form-group'>
                    <input name='tags' ref={register}  autoComplete='off' className='form-control' placeholder={post.tags}></input>
                </div>                */}
                
                <Button type='submit' className='btn btn-large btn-info'>Post</Button>
            </form>
        </div>
      </div>
    </form>
  );
};