var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Wisher = new Schema({
  serial_number: Number,
  name         : String,
  school_id    : String,
  phone        : Number,
  email        : String,
  messages     : String
});

mongoose.model('Wisher', Wisher);
mongoose.connect('mongodb://localhost/express-wisher');