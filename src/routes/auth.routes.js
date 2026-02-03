const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post(
    '/register',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    register
);

router.post('/login', login);

router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: 'Protected profile route',
        userId: req.user.userId
    });
});

module.exports = router;
