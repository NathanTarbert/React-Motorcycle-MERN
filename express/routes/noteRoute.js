const express = require('express');
const router = express.Router();
const Post = require('../models/noteModel');


router.route('/create').post((req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    const creator = req.body.creator;
    const newNote = new Post({
        title,
        imageUrl,
        content,
        creator
    });
    newNote.save();    
});

router.route('/posts').get((req, res) => {
    Post.find()
    .then(foundNotes => res.json(foundNotes));
});

module.exports = router;