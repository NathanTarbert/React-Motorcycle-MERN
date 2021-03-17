const express = require('express');
const router = express.Router();
const Post = require('../models/noteModel');


router.route('/create').post((req, res) => {
    const data = req.body;
    
    const title = data.title;
    const imageUrl = data.imageUrl;
    const content = data.content;
    const creator = data.creator;
    const likeCount = data.likeCount;
    const tags = data.tags;
    const createAt = data.createAt;

    const newNote = new Post({
        title,
        imageUrl,
        content,
        creator,
        tags,
        likeCount,
        createAt
    });
    newNote.save();    
});

router.get('/posts', async (req, res) => {
    try {
        const newPost = await Post.find(); 
        res.json(newPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;