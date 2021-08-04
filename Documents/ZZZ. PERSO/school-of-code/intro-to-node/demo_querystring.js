import { createServer } from 'http';
import { parse } from 'url';

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);