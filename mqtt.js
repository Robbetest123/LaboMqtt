var app = require('express')();
const GPIO = require('./gpio').default
var mqtt = require('mqtt')

var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello from robbe')
    }
    data = GPIO.readInputs();
  })
})

client.on('message',function(topic, message, packet){
  //console.log(message.toString())
  if(message.toString() == "SET_OUTPUT")
  {
    if(GPIO.relais.readSync() == 1){
      GPIO.relaisOn();
        console.log("relais aan via mqtt");
    }
    else if(GPIO.relais.readSync() == 0){
      GPIO.relaisOff();
      console.log("relais uit via mqtt");
    }   
  }
});

GPIO.mypin.watch(function(err,value){
  //console.log(value);
  if(value ==1){
    client.publish('presence' , "changed input from robbe high")
    console.log("changed input from robbe high");
  }
  
  else if (value == 0){
    client.publish('presence' , "changed input from robbe low")
    console.log("changed input from robbe low");
  }
  
})

// app.Interval = setInterval(async function() {
//   if (app.socket) {
//       //console.log('Reading inputs')
//       app.socket.emit('inputs', GPIO.readInputs())
//   } else {
//       //console.log('no socket')
//   }
// }, 1000)