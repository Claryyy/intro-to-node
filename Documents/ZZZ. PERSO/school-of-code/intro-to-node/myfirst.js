import { createServer } from 'http';
let dt = require('./myfirstmodule');

createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);