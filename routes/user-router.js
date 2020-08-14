const express = require('express')
const userRouter = express.Router();

const usersController = require('../controllers/user-controllers.js');
const authHelpers = require('../services/auth/auth-helpers.js');

userRouter.get('/', authHelpers.loginRequired, usersController.index);
userRouter.post('/', usersController.create);

//figure out what this is doing (I believe this is making a new account using redirect)
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});

module.exports = userRouter;