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
router.get('/:id', getUser, (req, res) => {
    //returns json
    res.status(200).json(res.post);
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
    
    //get post by id
router.get('/edit/:id', getUser, (req, res) => {
    //returns json
    res.status(200).json(res.post);
});

//updating post by id
router.post('/edit/:id', getUser, async (req, res) => {// id is found by req.params.id
    // console.log('res.post', res.post);
    console.log('req.body.title', req.body);
    // if(req.body.newTitle != null){
    //     res.post.title = req.body.newTitle;
    // }
    // if(req.body.newContent != null){
    //     res.post.content = req.body.newContent;
    // }
    // if(req.body.newImageUrl != null){
    //     res.post.imageUrl = req.body.newImageUrl;
    // }
    // if(req.body.newCreator != null){
    //     res.post.creator = req.body.newCreator;
    // }
    // if(req.body.newTags != null){
    //     res.post.tags = req.body.newTags;
    // }
    // try {
    //     const updatedPost = await res.post.save();
    //     res.json(updatedPost);
    // } catch (err) {
    //     res.status(400).json({ message: err.message});
    // }
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
    let post; 
    // console.log('the id from the backend is',req.params.id);
    try {
        post = await Post.findById(req.params.id);
        // console.log('post',post);
        if(post == null){
            return res.status(404).json({ message: 'Cannot find post' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.post = post;
    console.log('getUser helper', req);
    next();
}

module.exports = router;