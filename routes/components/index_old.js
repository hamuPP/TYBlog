var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/ckeditorDemo', function(req, res, next) {
	res.render('ckeditorDemo');
});

/*??????????ж??????????????????????????*/
app.get('/manage', function(req, res, next) {
	res.render('manage', { title: 'Express' });
});

app.post('/testform', function(req, res, next) {
	console.log(req.body);
	res.render('ckeditorDemo');
});

app.get('/video', function(req, res, next) {
	res.sendfile('public/html/video.html');
});
app.get('/video-all-browser', function(req, res, next) {
	res.sendfile('public/html/video-all-browser.html');
});

module.exports = app;
