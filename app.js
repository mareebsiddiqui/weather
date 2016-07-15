var app = require('express')();
var request = require('request');

app.get('/', function(req, res) {
  res.end("Weather API");
});

app.get('/weather', function(req, res) {
  res.end("Specify a location i.e /weather/{location}");
});

app.get('/weather/:location', function(req, res) {
  var location = req.params.location;
  request("http://api.openweathermap.org/data/2.5/forecast/city?q="+location+"&APPID=ad17f456dcc8feb46cee79a1faf75d47", function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.end(JSON.stringify(JSON.parse(body), null, 2));
    }
  });
});

app.get('/', function(req, res) {
  res.end("Weather API");
});

app.listen(3000, function() {
  console.log("listening");
})
