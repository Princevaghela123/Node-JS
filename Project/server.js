const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);

  // CSS file ke liye direct check
  if (req.url === '/style.css') {
    const cssPath = path.join(__dirname, 'public', 'style.css');
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Error loading CSS');
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      return res.end(data);
    });
    return;
  }

  let filePath;
  let statusCode = 200;

  switch (req.url) {
    case '/':
    case '/home':
      filePath = path.join(__dirname, 'public', 'index.html');
      break;

    case '/blog':
      filePath = path.join(__dirname, 'public', 'blog.html');
      break;

    case '/about':
      filePath = path.join(__dirname, 'public', 'about.html');
      break;

    case '/contact':
      filePath = path.join(__dirname, 'public', 'contact.html');
      break;

    default:
      filePath = path.join(__dirname, 'public', '404.html');
      statusCode = 404;
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error reading file:", err);

      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end('<h1>500 - Internal Server Error</h1>');
    }

    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(8080, (err) => {
  if (err) {
    console.log("Error: The server did not start. Please check it.", err);
    return;
  }
  console.log("Node Js Server is perfectly running on http://localhost:8080");
});
