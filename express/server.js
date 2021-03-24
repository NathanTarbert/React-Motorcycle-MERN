const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local');
const LocalStrategy = require('passport-local').Strategy;
const { body, validationResult } = require('express-validator');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();


require('dotenv').config();//pass in your sensative info into the .env file so that your info is protected.
mongoose.connect(process.env.DB_URI,  {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then( (res) => console.log('db connected'))
    .catch((err) => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cors({
  origin: 'http://localhost:3000', //<--location of the react app we are connecting to
  credenials: true
}));

// passport config
app.use(require('express-session')({
  secret: process.env.EXP_SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig.js/passport')(passport);

app.use(cookieParser('someSecret'));

app.use(express.json());

app.use('/', require('./routes/postRoute'));
app.use('/', require('./routes/userRoutes'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "notepad/build")));

var port = process.env.PORT || '3001';


app.listen(port, function() {
    console.log(`db connected to port ${port}`);
});