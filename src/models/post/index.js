const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = mongoose.model('Post', new Schema({
    user_id:       { type: String, required: true },
    img_urls:      [{ type: String, required: true }],
    description:   { type: String, default:'' },
    like:          { type: Number, default:0 },
    date:          { type: Date, default: Date.now }
}));

module.exports = Post;