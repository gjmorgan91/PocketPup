/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');



// variables set up to link to js files that will load each page
var login = require('./routes/login');
var vote = require('./routes/vote');
var home = require('./routes/home');
var store = require('./routes/store');
var locations = require('./routes/locations');
var signup = require('./routes/signup');
var activity = require('./routes/activity');
var profile = require('./routes/profile');
var training = require('./routes/training');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/vote', vote.view);
app.get('/vote/setIndex', vote.setIndex);
app.post('/vote/giveBones', vote.giveBones);
app.get('/activity', activity.view);
app.get('/home', home.view);
app.get('/test', home.view2);
app.get('/store', store.view);
app.get('/store/indoors', store.indoors);
app.get('/store/outdoors', store.outdoors);
app.get('/store/buy1', store.buy1);
app.get('/store/buy2', store.buy2);
app.get('/store/buy3', store.buy3);
app.get('/store/buy4', store.buy4);
app.get('/store/buy5', store.buy5);
app.get('/store/buy6', store.buy6);
app.get('/profile', profile.view);
app.get('/locations', locations.view);
app.get('/signup', signup.view);
app.get('/training', training.view);
app.post('/training/setLesson', training.setLesson);
app.get('/signup/getDog', signup.getDog);
app.post('/signup/update', signup.update);
app.post('/signup/updateProfile', signup.updateProfile);
app.post('/home/hidepoop', home.hidePoop);
app.post('/locations/poop', home.showPoop)

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
