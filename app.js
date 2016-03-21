var express = require('express');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});



// server setup
app.listen(3000, function() {
  console.log('server has started');
});
