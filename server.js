const express = require('express');
const mongoose = require('mongoose');
const app = express();

//CONFIG DB
const { PORT, MONGODB_URL} = require('./config');

//ROUTS
const auth = require('./src/routes/auth');
const posts = require('./src/routes/posts/all');
const detailPosts = require('./src/routes/detailPosts');
const profile = require('./src/routes/profile');
const addComments = require('./src/routes/api/addComments');
const addPosts = require('./src/routes/api/addPosts');
const addUsers = require('./src/routes/api/addUsers');

// app.use('/public', express.static(path.join(__dirname,'client/build')));
app.use('/', auth);
app.use('/', posts);
app.use('/', detailPosts);
app.use('/', profile);
app.use('/api', addComments);
app.use('/api', addPosts);
app.use('/api', addUsers);

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error' , console.error.bind(console, 'db connection err'));
mongoose.connection.once('open', callback = () => {
    app.listen(PORT, err => err ? console.error(err) : console.log(`We are on http://localhost:${PORT}`));
});