const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    text:    { type: String, required: true },
    date:    { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comments', commentsSchema);

module.exports = Post;