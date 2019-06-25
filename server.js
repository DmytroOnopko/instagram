const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

//CONFIG DB
const { PORT, MONGODB_URL} = require('./config');

//ROUTS
const auth = require('./src/routes/auth');
const posts = require('./src/routes/posts');
const detailPost = require('./src/routes/detailPost');
const profile = require('./src/routes/profile');
const addComment = require('./src/routes/api/addComment');
const addPost = require('./src/routes/api/addPost');
const addUser = require('./src/routes/api/addUser');

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