const express = require('express');
const router = express.Router();

// Роут POST `/comment/${id}`, который будет отдавать HTML страницу добавления нового комментария.
router.post('/comment/:id', (req, res) => {
    res.send('Add new comment')
});

module.exports = router;