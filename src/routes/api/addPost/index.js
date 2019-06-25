const express = require('express');
const router = express.Router();

// Роут POST `/post/${id}`, который будет отдавать HTML страницу добавления нового поста.
router.post('/post/:id', (req, res) => {
    res.send('Add new post')
});

module.exports = router;