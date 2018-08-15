const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');


const db = require('./config/keys').mongoURI;

mongoose.connect(db)
       .then(()=>console.log('db connected successfully'))
       .catch((err)=>console.log(`db connetion err: ${err}`))
// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);


app.use(morgan('dev'));
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3003;

app.get('/', (req,res) => {
    return res.status(200).send('poc express')
})

app.get('/test', (req,res) => {
    return res.status(200).send('test express')
})

app.use('/api/users', users);
app.use('/api/profile', profile);



app.listen(port, ()=> console.log(`server started on port: ${port}`));
