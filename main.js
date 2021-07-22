const mqtt = require('mqtt');

// const mqttClient = mqtt.connect("mqtt://13.125.130.241");
// const mqttClient = mqtt.connect("mqtt://192.168.0.19");

// mqttClient.on('connect', () => {
  // mqttClient.subscribe('#');

  // for(let i=1; i<=1000000; i++) {
  //   mqttClient.publish('suwon', i.toString().padStart(7, '0'));
  // }
// });

// mqttClient.on('message', (topic, payload) => {
//   console.log(topic, payload.toString());
// });

const clientList = [];

for(let i=1; i<=10000; i++) {
  const client = mqtt.connect("mqtt://192.168.0.19");
  client.on('connect', () => {
    client.subscribe("#");
    client.on('message', onMessage);
    setInterval(() => {
      client.publish('suwon', i.toString().padStart(7, '0'));
    }, 1000);
  });
  clientList.push(client);
}

let obj = {};

function onMessage(topic, payload) {
  if(obj[payload.toString()]) {
    obj[payload.toString()]++;
  } else {
    obj[payload.toString()] = 1;
  }
  console.log(obj);
}