const express = require('express');
const router = express.Router();

// Роут GET `/profile/${id}`, который будет отдавать HTML страницу детального отображения профиля юзера.
router.get('/profile/:id', (req, res) => {
    res.send('Profile users')
});

module.exports = router;