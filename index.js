// import required packages
const express = require('express');
const path = require('path');
const cors = require('cors');

const https = require('https');
const http = require('http');

const fs = require('fs');

// create new express app and save it as "app"
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// create a route for the app
app.get('/', (req, res) => {
  //res.send('Hello dev.to!');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// another route
app.get('/omergulen', (req, res) => {
  res.send('Hello Omer! Welcome to dev.to!');
});

// Listen both http & https ports
const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/jamesfletcher.dev/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/jamesfletcher.dev/fullchain.pem'),
}, app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});

