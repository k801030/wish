var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var wisher   = mongoose.model('Wisher');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Wisher Example' });
});


exports.create = function(req, res){
  new Wisher({
    name         : 'myname',
    school_id    : 'myid'
  }).save(function(err, Wisher, count){

  });
};

module.exports = router;
