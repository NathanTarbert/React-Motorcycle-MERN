var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
const Post = require('./postModel');

var userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);