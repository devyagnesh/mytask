require('dotenv').config({});
const http = require('http');
const app= require('./src/app');


const server = http.createServer(app);

const LISTEN_PORT = process.env.SERVER_PORT || 5000;

server.listen(LISTEN_PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT : ${LISTEN_PORT}`);
});
