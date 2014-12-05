var express  = require('express');
var router   = express.Router();

var mongoose = require('mongoose');
var Wisher   = mongoose.model('Wisher');


router.post('/create', function create(req, res){
  new Wisher({
    name         : 'myname',
    school_id    : 'myid'
  }).save(function(err, Wisher, count){
    console.log('hi');
    res.send(true);
  });
    
});

router.get('/read', function index(req, res){
  Wisher.
  find().
  exec(function(err, wishers, count){
    res.send(wishers);
  });
    
});




module.exports = router;