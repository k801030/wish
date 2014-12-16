// mongoose setup
require('./db');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var flash = require('flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var index = require('./routes/index');
var admin = require('./routes/admin');
var users = require('./routes/users');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'ntusa-1234567',
    resave: true,
    saveUninitialized: true
}));
// passport
var _user = {
    id: "ntusa",
    psw: "2014"
}
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  if( _user.id == id){
    done(null, _user);
  };
});
passport.use(new localStrategy(
    function(username, password, done){
        
        if(_user.id == username && _user.psw == password){
            return done(null, _user);
        }else {
            return done(null, false, { message: "incorrect"});
        }
    }
));

app.use('/', index);
app.use('/admin', logged, admin);
app.use('/api', logged, api);
app.post('/checkAuth', passport.authenticate('local', { successRedirect: '/admin',
                                   failureRedirect: '/login',
                                   failureFlash: true }));
passport.authenticate('local', { failureFlash: 'Invalid username or password.' });
function logged(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
