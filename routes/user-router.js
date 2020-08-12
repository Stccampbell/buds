const userRouter = require('express').Router();

const usersController = require('../controllers/user-controllers.js');
const authHelpers = require('../services/auth/auth-helpers.js');

userRouter.get('/', authHelpers.loginRequired, usersController.index);
userRouter.post('/', usersController.create);

//figure out what this is doing
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});

module.exports = userRouter;