const mongoose = require('mongoose');

const notesSchema = {
    title: String,
    content: String,
    // imageUrl: String,
    author: String
};

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;