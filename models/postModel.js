const mongoose = require('mongoose');

const postSchema = {
    title: String,
    content: String,
    imageUrl: String,
    creator: String,
     tags: [String],
    // selectedFile: String,
    likeCount: [{
        type: Number,
        default: 0
    }],
    createAt: {
        type: Date,
        default: new Date()
    }
};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;