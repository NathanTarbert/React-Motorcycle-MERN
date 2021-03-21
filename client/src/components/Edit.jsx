import React, { useState, useEffect } from "react";
import { Form } from './Form';
import { useRouteMatch, useHistory } from "react-router-dom";
import { getPosts, editPosts } from "./api";

export const EditPost = () => {
  const match = useRouteMatch();
  const [post, setTodo] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPosts(match.params.id);
      setTodo(post);
    }
    fetchPost();
  }, []);

  const onSubmit = async (data) => {
    await editPosts(data, match.params.id);
    history.push("/");
  };

  return post ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit post Item</h3>
        <Form post={post} onSubmit={onSubmit}/>
      </div>
    </div>
     ) : (
    <div>Loading...</div>
     ); 
}
 
export default EditPost;