var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ckeditorDemo', function(req, res, next) {
	res.render('ckeditorDemo');
});

/*��̨�������ж��Ƿ��ұ��˵�¼������������վ��ҳ*/
router.get('/manage', function(req, res, next) {
	res.render('manage', { title: 'Express' });
});

module.exports = router;
