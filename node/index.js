const http = require('http');
const server = http.createServer((req, res) => {
  res.write("hello world123");
  res.end();
})
server.listen(3000);
