const authRouter = require('express').Router();
const passport = require('../services/auth/local'); //helps determine user
const authHelpers = require('../services/auth/auth-helpers'); //helps log in
const userController = require('../controllers/user-controllers');

authRouter.post('/register', userController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/api/auth/verify',
    faliureRedirect: '/api/auth/verify',
    faliureFlash: true,
    })
);

authRouter.get('/verify', (req, res) => {
    if(req.user) return res.status(200).json({
        message: 'ok',
        auth: true,
        data: {
            user: req.user,
        }
    });
    else return res.status(400).json({
        message: 'Login failed',
        auth: false,
        data: {
            user: null,
        }
    });
});

authRouter.get('/logout', (req, res) => {
    req.logOut();
    res.json({
        message: 'logged out',
        auth: false,
        data: {
            user: null,
        }
    })
});

authRouter.get('/userGet/:id', userController.show);

module.exports = authRouter
