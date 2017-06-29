const express = require('express');
const http = require('http');
const path = require('path');
//const api = require('./server/routes/api');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
}) 

const port = process.env.PORT || '4200';
const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));