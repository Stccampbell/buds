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

    show = (req, res, next) => {
        User.getById(req.params.id)
          .then((User) => {
            res.json({
              message: 'ok',
              data: { User },
            });
          })
          .catch(next);
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
        .then(user => {
            req.login(user, (err) => {
                if(err) return next(err);
                res.status(201).json({
                    message: 'user successfully created',
                    auth: true,
                    data: {
                        user,
                    }
                })
            });
        }).catch(next);
    }
}

module.exports = usersController
