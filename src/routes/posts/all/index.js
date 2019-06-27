const { Router } = require('express');
const router = new Router();
const Posts = require('../../../models/posts');

// Роут GET `/posts`, который будет отдавать HTML страницу отображения всех постов.
router.get('/posts', async (req, res) => {
    const posts = await Posts.find();
    // console.log(posts);
});

module.exports = router;

