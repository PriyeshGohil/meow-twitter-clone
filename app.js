var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var app = express();

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout:'layout'}));
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.use(cookieParser());

// mongodb setup
mongoose.connect('mongodb://localhost/test');

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// sessions
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// flash messages
app.use(flash());

// routes
var signUpRoute = require('./routes/sign-up');
app.use('/', signUpRoute);


app.get('/', function(req, res) {
  res.render('index');
});




// server setup
app.listen(3000, function() {
  console.log('server has started');
});
