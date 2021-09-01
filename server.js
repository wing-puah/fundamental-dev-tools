// comment 1
// comment 2

const http = require('http');

const host = '127.0.0.1';
const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('My first server!');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
