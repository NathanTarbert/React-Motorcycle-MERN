const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

router.get('/posts', async (req, res) => {//this is the home page
    try {
        const newPost = await Post.find(); 
        res.json(newPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//get post by id
router.get('/:id', getUser, async (req, res) => {// id is found by req.params.id
    const id = req.params.id;
    try {
        Post.findById(id, (err, post) => {
            console.log('this is the id', id);
        res.json(post);
        });
    } catch (err) {
        res.status(400).json({ message: err.message});
    }   
});

//create post
router.post('/create', async (req, res) => {// id is found by req.params.id
    const post = new Post({        
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        content: req.body.content,
        likeCount: req.body.likeCount,
        creator: req.body.creator,
        tags: req.body.tags,
        createAt: req.body.createAt
    }); 
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }  
    
//updating post by id
router.patch('/:id', getUser, async (req, res) => {// id is found by req.params.id
    if(req.body.name != null){
        res.user.name = req.body.name;
    }
    if(req.body.content != null){
        res.user.content = req.body.content;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
});

//deleting post by id
router.delete('/:id', getUser, async(req, res) => {// id is found by req.params.id
    try {
        await res.user.remove();
        res.json({ message: 'Deleted User' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

});

async function getUser(req, res, next){//this function runs check to see if the user exists
    let user; 
    try {
        user = await User.findById(req.params._id);
        if(user == null){
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();
}

module.exports = router;