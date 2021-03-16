const express = require('express');
const router = express.Router();
const Post = require('../models/noteModel');


router.route('/create').post((req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    const creator = req.body.creator;
    const likeCount = req.body.likeCount;
    const tags = req.body.tags;
    const createAt = req.body.createAt;

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