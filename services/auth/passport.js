const passport = require('passport');
const User = require('../../models/User');

module.exports = (() => {
    passport.serializeUser((user, done) => {
        done(null, user.username);
    }); //Creates the username passport

passport.deserializeUser((username, done) => {
    console.log('deserialize')
    User.findByUserName(username)
        .then((user) => {
            // console.log(user); //might need to remove the console logs here
            // console.log(done);
            return done(null, user);
        })
        .catch((err) => {
            return done(err, null);
        });
});//translates the username passport

return passport
})();