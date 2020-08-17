const authRouter = require('express').Router();

const authHelpers = require('../services/auth/auth-helpers.js');
const passport = require('../services/auth/local');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login');
});
//if the user logs in successfully they go to /user(not sure where)
//if fail they go to /auth/login
authRouter.post('/login',
    passport.authenticate('local', {
        successRedirect: '/plants',
        faliureRedirect: '/login',
        faliureFlash: true,
    })
);

authRouter.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login'); //need to find back
});

module.exports = authRouter
