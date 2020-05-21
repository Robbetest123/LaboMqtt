var app = require('express')();
var http = require('http').createServer(app);


const GPIO = require('./gpio').default
const mqtt = require('./mqtt').default

var data;


app.get('/', function(req, res){
  res.sendfile(__dirname+'/index.html');
});

app.get('/buttons.html', function(req, res){
  res.sendfile(__dirname+'/buttons.html');
});

app.get('/leds.html', function(req, res){
  res.sendfile(__dirname+'/leds.html');
});

app.get('/temperature.html', function(req, res){
  res.sendfile(__dirname+'/temperature.html');
});



http.listen(3000, function(){
  //console.log('listening on *:3000');
});





 






