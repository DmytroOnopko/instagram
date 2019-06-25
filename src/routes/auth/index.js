const express = require('express');
const router = express.Router();

// Роут GET `/`, который будет отдавать HTML страницу отображения авторизации пользователя.
router.get('/', (req, res) => {
    res.send('Authorization')
});

module.exports = router;