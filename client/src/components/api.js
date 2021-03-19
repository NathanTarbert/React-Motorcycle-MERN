export const getPosts = () => fetch("http://localhost:3001/posts").then(res => res.json())

export const createPosts = (post) => fetch("http://localhost:3001/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(post)
}); 

export const editPosts = (post, id) => fetch(`http://localhost:3001/edit${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(post)
});  

export const getPost = (id) => fetch(`http://localhost:3001/details${id}`).then((res) =>  res.json())
// .then((json) => console.log(json)).catch((err) => console.log(err.message));