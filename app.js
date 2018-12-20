const potusScraper = require("./service/potusScraper");

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let count = 10;

  potusScraper.scrap(count).then(function (urls) {
	  console.log('Scarpped Urls:', urls);
	  res.end(urls.toString());
  });

  
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});