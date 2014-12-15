var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Wisher   = mongoose.model('Wisher');
var fs = require('fs');

router.get('/', function(req, res) {
  res.render('index', { title: '星祈 — 耶誕許願' });
});

router.post('/checkCode', function checkCode(req, res) {
  code = req.body.code;
  var matchcodes;
  fs.readFile('matchcode.json', 'utf8', function(err, data){
    if(err) {
      console.log("err"+err);
      throw err;
    }
    matchcodes = JSON.parse(data);
    var isFind = false;
    for(var i=0; i<matchcodes.length; i++){
      if(code == matchcodes[i].code){
        isFind = true;
        Wisher.findOne({ 'id' : matchcodes[i].id }, function(err,wisher){
          res.send(wisher);
        });
      }
    }
    if(!isFind)
      res.send(false);
  });
});

module.exports = router;
