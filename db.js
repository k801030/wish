var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Wisher = new Schema({
  id: String,
  name         : String,
  school_id    : String,
  phone        : String,
  email        : String,
  messages     : String
});

mongoose.model('Wisher', Wisher);
mongoose.connect('mongodb://localhost/express-wisher');