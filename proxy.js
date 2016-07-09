var express = require('express');
var app = express();
var endpoint = process.env.API_ENDPOINT || 'http://localhost:3003';

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/dist/*', function(req, res) {
  res.sendfile(__dirname + req.url);
});

app.use('/img', express.static(__dirname + '/img'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/templates', express.static(__dirname + '/templates'));
app.use('/json', express.static(__dirname + '/json'));

app.listen(3002, function() {
  console.log('Example app listening on http://localhost:3002');
});


function handleError(e) {
  console.log(e);
}
