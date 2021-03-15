import React, { useEffect, useState, useParams } from 'react';

const Posts = () => { 
    // const { id } = useParams();//grab the id for the blog id   
    const [posts, setPosts] = useState([{
        title: '',
        imageUrl: '',
        content: '',
        creator: ''
    }]);

    useEffect(() => {
        fetch('/posts')
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        })
        .then(jsonRes => setPosts(jsonRes));
    });

    // const handleClick = () => {
    //     fetch('/notes' + notes.id, {
    //         method: 'DELETE'
    //     })
    //     .then(() => {
    //         console.log('the notepad has been deleted');
    //     });
    // };

    return  <div className='post-container'>
                <h1>These are your notes:</h1>
                {posts && posts.map(post => 
                <div>
                    <h2>{post.title}</h2>
                    <img src={post.imageUrl} alt='motorcycle'/>
                    <p>{post.content}</p> 
                    <p>Written by {post.creator}</p>
                    {/* <button onClick={handleClick}>DELETE</button>*/}
                    <button>This button is temporary but will be delete</button>
                </div>                
                )}
            </div>             
      
}
 
export default Posts;