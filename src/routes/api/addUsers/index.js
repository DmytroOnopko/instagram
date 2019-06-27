const { Router } = require('express');
const router = new Router();
const Users = require('../../../models/users');

// Роут POST `/users`, который будет отдавать HTML страницу добавления нового юзера.
router.post('/users', (req, res) => {
    res.send('Add new users')
});

module.exports = router;