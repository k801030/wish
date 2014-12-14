var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Wisher   = mongoose.model('Wisher');

router.get('/', function index(req, res) {
  res.render('admin', { title : '星祈 — 管理表單' });
});

router.get('/print', function index(req, res) {
  res.render('print', { title : '列印頁面' });
});


module.exports = router;