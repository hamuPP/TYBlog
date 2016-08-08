var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ckeditorDemo', function(req, res, next) {
	res.render('ckeditorDemo');
});

/*后台管理，先判断是否我本人登录，否则跳回网站首页*/
router.get('/manage', function(req, res, next) {
	res.render('manage', { title: 'Express' });
});

module.exports = router;
