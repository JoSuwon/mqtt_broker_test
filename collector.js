const mqtt = require('mqtt');

// const client = mqtt.connect("mqtt://13.125.130.241");
const client = mqtt.connect("mqtt://172.31.16.1");

client.subscribe('#');


let count = 0;
client.on('message', (topic, message) => {
  console.log(topic, message.toString(), ++count);
});