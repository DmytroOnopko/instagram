const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

//CONFIG DB
const { PORT, MONGODB_URL} = require('./config');

//ROUTS
const auth = require('./src/routs/auth');
const posts = require('./src/routs/posts');
const detailPost = require('./src/routs/detailPost');
const profile = require('./src/routs/profile');
const addComment = require('./src/routs/api/addComment');
const addPost = require('./src/routs/api/addPost');
const addUser = require('./src/routs/api/addUser');

const app = express();

app.use('/public', express.static(path.join(__dirname,'client/build')));
app.use('/', auth);
app.use('/', posts);
app.use('/', detailPost);
app.use('/', profile);
app.use('/api', addComment);
app.use('/api', addPost);
app.use('/api', addUser);

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
mongoose.connection.on('error' , console.error.bind(console, 'db connection err'));
mongoose.connection.once('open', callback = () => {
    app.listen(PORT, err => err ? console.error(err) : console.log(`We are on http://localhost:${PORT}`));
});