var app = require('express')();
var http = require('http').createServer(app);


const GPIO = require('./gpio').default
const mqtt = require('./mqtt').default

var data;

http.listen(3000, function(){
  console.log('listening on *:3000');
});





 






