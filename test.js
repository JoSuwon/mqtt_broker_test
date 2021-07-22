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
  const client = mqtt.connect("mqtt://172.31.16.1");
  client.on('connect', () => {
    // client.subscribe("#");
    // client.on('message', (topic, payload) => console.log(topic, payload.toString()));
    clientList.push(client);
  });
}

setTimeout(() => {
  console.log(clientList.length);
  // for(let i=0; i<clientList.length; i++) {
  //   clientList[i].publish(clientList[i].options.clientId, i.toString().padStart(7, '0'));
  // }
  for(let i=10000; i>=0; i--) {
    const index = parseInt(Math.random()*clientList.length, 10);
    // console.log(index);
    if(clientList[i]) clientList[i].publish(clientList[i].options.clientId, i.toString().padStart(7, '0'));
  }
}, 30000);

let countMap = {};

// setInterval(() => {
//   console.log(countMap);
//   console.log(Object.keys(countMap).length);
// }, 2000);

function onMessage(topic, payload) {
  console.log(topic, payload.toString());
  // if(countMap[topic]) {
  //   countMap[topic]++;
  // } else {
  //   countMap[topic] = 1;
  // }
  // console.log(topic, payload.toString());
  // console.log(count);
  // if(obj[payload.toString()]) {
  //   obj[payload.toString()]++;
  // } else {
  //   obj[payload.toString()] = 1;
  // }
  // console.log(obj);
}