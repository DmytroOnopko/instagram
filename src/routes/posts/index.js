const express = require('express');
const router = express.Router();

// Роут GET `/posts`, который будет отдавать HTML страницу отображения всех постов.
router.get('/posts', (req, res) => {
    res.send('All posts')
});

module.exports = router;