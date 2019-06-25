const express = require('express');
const router = express.Router();

// Роут GET `/posts/${id}`, который будет отдавать HTML страницу детального отображения постов.
router.get('/posts/:id', (req, res) => {
    res.send('Detail posts')
});

module.exports = router;