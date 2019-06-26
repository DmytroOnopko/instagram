const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User', new Schema({
    name:              { type: String, required: true },
    surname:           { type: String, required: true },
    login:             { type: String, required: true, unique: true },
    password:          { type: String, required: true },
    img_url:           { type: String, required: true },
    subscribers_id:   [{ type: String, default:'' }],
    follow_id: [{ type: String, default:'' }]
}));

module.exports = User;