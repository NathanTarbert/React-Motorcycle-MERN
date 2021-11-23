import axios from 'axios';

export const getPosts = () => fetch("/posts").then(res => res.json());

export const createPosts = (post) => fetch("/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(post)
}); 

export const editPosts = (post, id) => fetch(`/edit/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(post)
});  

export const getPost = (id) => fetch(`/details/${id}`).then((res) =>  {
  res.json();  
});


console.log('path is', getPost(id));
.then((json) => console.log(json)).catch((err) => console.log(err.message));