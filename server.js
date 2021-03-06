const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//^^^ the various npm modules i downloaded

const authHelpers = require('./services/auth/auth-helpers.js'); //my auth helper to determine if logged in


const userRouter = require('./routes/user-router');
const authRouter = require('./routes/auth-router');
const userPlantsRouter = require('./routes/user-plants-router');
// const trefleRouter = require('./routes/trefle-router');
//^^^ my routers being called

const app = express();
require('dotenv').config();
//^^^declaring my express app

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
//^^ telling my app how to use my various npm packages

app.set('views, views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
//^^^ telling my app where to find my ejs views and public files and how to use them

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
//^^^ telling the app to listen on port ||3000

app.get('/', (req, res) => {
    res.render('index')
})
//^^^ my main page titl


app.use('/plants', authHelpers.loginRequired, userPlantsRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
//^^^telling the app to user the routers for these http routes

app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
    });
});
//^^^ my error code

app.use((err, req, res, next) => {
    res.status(500).send({ err, message: err.message });
});