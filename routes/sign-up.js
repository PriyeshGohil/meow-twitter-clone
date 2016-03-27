var express = require('express');
var router = express.Router();

router.get('/sign-up', function(req,res) {
  res.render('sign-up');
});

router.post('/sign-up', function(req, res) {
  var formErrors = [];
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  if(!name) formErrors.push('Please enter a username');
  if(!email) formErrors.push('Please enter your email');
  if(!password) formErrors.push('Please enter a password');

  req.flash('error_msg', formErrors);
  res.render('sign-up', {message: formErrors, formData: req.body});
});

module.exports = router;
