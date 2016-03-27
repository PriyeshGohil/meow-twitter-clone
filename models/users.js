var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var userSchema = new Schema({
  username = {type: String, required: true},
  email = {type: String, required: true},
  password = {type: String, required: true},
});

module.exports = mongoose.model('User', userSchema);

// custom method for creating a new user
userSchema.pre('save', function(next) {
  // if password is already hashed move on.
  if(this.password) next();

  bcrypt.genSalt(10, function(err,salt) {
    bcrypt.hash(this.password, salt, function(err,hash) {
        this.password = hash;
    });
  });

})
