const express = require('express')
const userRouter = express.Router();

const usersController = require('../controllers/user-controllers.js');
const authHelpers = require('../services/auth/auth-helpers.js');

userRouter.get('/', authHelpers.loginRequired, usersController.index); //show user profile page none was implented yet however
userRouter.post('/', usersController.create); //creates new user

//redirects user to the auth login page
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});

module.exports = userRouter;