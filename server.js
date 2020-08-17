const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');//still need to figure this out
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const authHelpers = require('./services/auth/auth-helpers.js');

const userRouter = require('./routes/user-router');
const authRouter = require('./routes/auth-router');
const userPlantsRouter = require('./routes/user-plants-router');
// const trefleRouter = require('./routes/trefle-router');

const app = express();
require('dotenv').config();

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

app.set('views, views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

// const trefleHelper = require('./services/trefle-helper')

// app.get('/', plantsTrefle, (req, res) => {
//     res.render('index', {
//         treflePlants: res.locals.treflePlants,
//         appName:'Buds',
//     })
// })

app.get('/', (req, res) => {
    res.render('index', {
        appName:'Buds',
    })
})

// app.use('/plantSearch', trefleRouter);
app.use('/plants', authHelpers.loginRequired, userPlantsRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);


app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
    });
});

app.use((err, req, res, next) => {
    res.status(500).send({ err, message: err.message });
});