const bcrypt = require('bcryptjs');

//comparing the password sent to the password on file
function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

//if req.user is true it redirects to /user
function loginRedirect(req, res, next) {
    if (req.user) return res.redirect('/plants')
    return next();
}

//if req.user is fale redirect to the login page
function loginRequired(req, res, next) {
    if (!req.user) return res.redirect('/auth/login');
    next();
}

module.exports = {
    comparePass,
    loginRedirect,
    loginRequired,
}