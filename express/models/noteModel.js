const mongoose = require('mongoose');

const notesSchema = {
    title: String,
    content: String,
    // imageUrl: String,
    author: String,
    //  tags: [String],
    // selectedFile: String,
    // likeCount: {
    //     type: Number,
    //     default: 0
    // },
    // createAt: {
    //     type: Date,
    //     default: new Date()
    // }
};

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;