var express = require('express');
var cors = require('cors');
var config = require('./config/app.js');
var compression = require('compression');
var routes = require('./routes');
var middlewareErrorParser = require('./middleware/ErrorParser');
var middlewarePathLogger = require('./middleware/PathLogger');

var app = express();

app.use(express.json({type: "application/json"}));
app.use(express.urlencoded({ extended: false }));

// use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:5000', credentials: true }));

// comporess output
app.use(compression());

// only on debug mode
if(config.debug){
    // path logger
    app.use(middlewarePathLogger);
}

// use routes
app.use('/', routes);

app.use(middlewareErrorParser);

// Start server
app.listen(config.port, () => {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
module.exports = app;