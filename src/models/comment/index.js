const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = mongoose.model('Comment', new Schema({
    post_id: { type: String, required: true },
    user_id: { type: String, required: true },
    text:    { type: String, required: true },
    date:    { type: Date, default: Date.now }
}));

module.exports = Post;