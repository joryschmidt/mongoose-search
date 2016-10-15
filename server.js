var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var db = 'mongodb://' + process.env.IP + '/search-app';
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'kitty',
  saveUninitialized: true,
  resave: true
}));

require("./config/passport")();
app.use(passport.initialize());
app.use(passport.session());

var users = require("./routes/user");
var website = require('./routes/website');
app.use('/users', users);
app.use('/website', website);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('App listening on port ' + port);
});
