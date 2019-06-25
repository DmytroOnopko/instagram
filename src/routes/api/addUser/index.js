const express = require('express');
const router = express.Router();

// Роут POST `/user`, который будет отдавать HTML страницу добавления нового юзера.
router.post('/user', (req, res) => {
    res.send('Add new user')
});

module.exports = router;