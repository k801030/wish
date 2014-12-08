var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Wisher   = mongoose.model('Wisher');

router.get('/', function index(req, res) {
  res.render('admin', { title : 'Admin Page' });
});

router.get('/print', function index(req, res) {
  res.render('print', { title : 'Print Page' });
});


module.exports = router;