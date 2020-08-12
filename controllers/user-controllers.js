// const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {
//shows profile page
    index(req,res, next) {
        res.json({
            message: 'Add a profile page',
            data: {
                user: req.user,
            },
        });
    },
//creates user profile
    create(req,res,next) {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);
        new User({ 
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
        })
            .save()
            .then((user) => {
                req.login(user, (err) => {
                    if(err) return next(err);
                res.redirect('/user');
                });
            })
            .catch(next);
    }
}
