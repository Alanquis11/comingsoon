require('dotenv').config();
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({  });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    req.url = req.url.replace(/\[/g, '%5B').replace(/\]/g, '%5D');
    next();
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';

  server.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${host}:${port}`);
  });
});
