const bcrypt = require('bcryptjs');
const User = require('../models/User.js');

const usersController = {
//shows profile page not in user
    index(req,res, next) {
        res.json({
            message: 'Add a profile page',
            data: {
                user: req.user,
            },
        });
    },
//creates user profile is being used
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
                res.redirect('/plants');
                });
            })
            .catch(next);
    }
}

module.exports = usersController
