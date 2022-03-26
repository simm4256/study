const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const http = require('http').createServer(app);
http.listen(port, () => {
    console.log('listening on ' + String(port));
});

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')));