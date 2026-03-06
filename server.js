const http = require('http');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  if (parsedUrl.pathname === '/get') {
    const key = parsedUrl.searchParams.get('key');
    if (!key) {
      res.end('key not passed');
    } else {
      res.end('hello ' + key);
    }
  } else {
    res.end('method not supported');
  }
});

server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
