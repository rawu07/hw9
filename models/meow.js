var mongoose = require('mongoose');
mongoose.connect('mongodb://Irina:test@ds013911.mlab.com:13911/rawu07');
//mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var meowSchema = new Schema({
  name: String,
  words: String,
});
module.exports = mongoose.model('Meow', meowSchema);
