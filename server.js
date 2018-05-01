var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');
var ejs = require('ejs');
var ejsEngine = require('ejs-mate');

var app = express();

//db connection
mongoose.connect('mongodb://ramees_sahlu:dota1234@ds263109.mlab.com:63109/riza_e_commerce_db', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database.");
  }
});

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.engine('ejs', ejsEngine);
app.set('view engine', 'ejs');

//routes
app.post('/create-user', function(req, res, next){
   var user = new User();

   user.profile.name = req.body.name;
   user.email = req.body.email;
   user.password = req.body.password;

   user.save(function(err) {
     if(err) return next(err);

     res.json("Successfully created the new user!");
   });
});

app.get('/', function(req, res) {
  res.render('main/home');
});





app.listen(1994, function(err) {
  if(err) throw err;
  console.log("Server is running on port 1994...");
});
