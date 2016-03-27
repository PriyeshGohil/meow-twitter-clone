var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
  username = {type: String, required: true},
  email = {type: String, required: true},
  password = {type: String, required: true},
});
