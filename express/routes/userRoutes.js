var express = require('express');
var router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// let newUser = new User({
//     username: req.body.password,
//     password: req.body.password
// });

router.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});


router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });

router.get('/register', (req, res) => {
    console.log('this is firing from userRoutes');
});

router.post("/register", (req, res) => {
    console.log('this is firing from postRoute');
User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
    });
    await newUser.save();
    res.send("User Created");
    }
});
});

module.exports = router;

// app.get("/user", (req, res) => {
// res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
// });

  
// Logout route
router.get('/logout', function(req, res) {
    console.log('get logout route');
    //console.log('~req pre', req)
    req.logout();
    res.status(200).json({});
    //console.log('~req post', req)
});

module.exports = router;