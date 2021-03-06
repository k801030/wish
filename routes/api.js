var express  = require('express');
var router   = express.Router();

var mongoose = require('mongoose');
var Wisher   = mongoose.model('Wisher');
var fs = require('fs');

router.post('/create', function createWisher(req, res){
  wisher = req.body;
  console.log(wisher);
  
  new Wisher({
    id       : wisher.id,
    name     : wisher.name,
    school_id: wisher.school_id,
    phone    : wisher.phone,
    email    : wisher.email,
  }).save(function(err, Wisher, count){
    console.log(err);
    if(err)
      res.send(false);
    else
      res.send(true);
  }); 
});

router.get('/load', function indexWisher(req, res){
  Wisher.
  find().
  exec(function(err, wishers, count){
    res.send(wishers);
  });
});

router.get('/delete/:id', function deleteWisher(req, res){
  Wisher.findById(req.params.id, function(err,wisher){
    wisher.remove(function(err, wisher){
      res.send(true);
    });
  });
});

router.get('/secretcode', function getCode(req, res){
  fs.readFile('matchcode.json', 'utf8', function(err, data){
    if(err) throw err;
    res.send(data);
  });
});






module.exports = router;