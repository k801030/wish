var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var wisher   = mongoose.model('Wisher');

/* GET home page. */
/* router.get('/', function(req, res) {
 *   res.render('index', { title: 'Express Wisher Example' });
 * });
 */

module.exports = router;
