var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    config = require('./config');

var app = express();

//region all configuration

app.set('port', process.env.PORT || config.get('port'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//endregion

//region register all router file
require('./router/app-router')(app, fs);
//endregion

//region global interceptor
require('./interceptor/global-interceptor')(app);
//endregion

//region error handler
require('./interceptor/global-error-handle-interceptor')(app, config);
//endregion

//region  start server
var server = http.createServer(app);
server.listen(app.get('port'), config.get('ip'), function () {
    console.log('express listen on port ' + app.get('port'));
});
//endregion

module.exports = app;
