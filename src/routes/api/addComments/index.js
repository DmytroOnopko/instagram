const express = require('express');
const router = express.Router();

// Роут POST `/comments/${id}`, который будет отдавать HTML страницу добавления нового комментария.
router.post('/comments/:id', (req, res) => {
    res.send('Add new comments')
});

module.exports = router;