var express  = require('express');
var router   = express.Router();

var mongoose = require('mongoose');
var Wisher   = mongoose.model('Wisher');


router.post('/create', function createWisher(req, res){
  new Wisher({
    name         : 'myname',
    school_id    : 'myid'
  }).save(function(err, Wisher, count){

  });
});

router.get('/', function index(req, res) {
  Wisher.
  find().
  exec(function (err, todos, count) {
    res.render('index', {
      title : 'Express Todo Example',
        todos : todos
      });
  });
});

router.get('/create', function create(req, res) {
    res.render('create', {
      title : 'Create Page',
      });
});



module.exports = router;