const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

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

app.use('/', require('./routes/noteRoute'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "notepad/build")));

var port = process.env.PORT || '3031';


app.listen(port, function() {
    console.log(`db connected to port ${port}`);
});