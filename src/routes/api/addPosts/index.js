const express = require('express');
const router = express.Router();

// Роут POST `/posts/${id}`, который будет отдавать HTML страницу добавления нового поста.
router.post('/posts/:id', (req, res) => {
    res.send('Add new posts')
});

module.exports = router;