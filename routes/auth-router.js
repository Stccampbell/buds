const authRouter = require('express').Router();

const authHelpers = require('../services/auth/auth-helpers.js'); //helps log in
const passport = require('../services/auth/local'); //helps determine user

//this redirects the user to the login page allowing them to login unless they are logged in
authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login');
});
//if the user logs in successfully they go to /plants
//if fail they go to /auth/login
authRouter.post('/login',
    passport.authenticate('local', {
        successRedirect: '/plants',
        faliureRedirect: '/login',
        faliureFlash: true,
    })
);
//this logs the user out and sends them to login
authRouter.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login'); //need to find back
});

module.exports = authRouter
