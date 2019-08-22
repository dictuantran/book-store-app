// import the require dependencies
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var pool = require('./models/UserDB');
var express = require('express');

var app = express();
app.set('view engine', 'ejs');

// use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:5000', credentials: true }));

// use cookie parser to parse request headers
app.use(cookieParser());

// use express session to maintain session data
app.use(session({
    secret              : 'cmpe_273_secure_string',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));

app.use(bodyParser.json());

// Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
})

pool.query('SELECT * FROM user', function(err, rows){
    if(err) {
        throw err;
    } else {
      console.log("Connection to DB established");
      console.log(rows);
    }
});

// Route to get All users when user visits the report page
app.get('/list', function(req, res) {
    pool.query('SELECT * FROM user', (err, result) => {
        if(err){
            console.log(err);
            res.status(400).send("Error in Connection");
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.end(JSON.stringify(result));
        }        
    })
})

// Start your server on port 5001
app.listen(5001);
console.log("Server Listening on port 5001");