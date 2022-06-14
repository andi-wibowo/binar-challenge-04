const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const PATH_DIR = __dirname + '/public/';
const path = require('path');
const fs = require('fs');

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(PATH_DIR + 'index.html'));
});

app.get('/cars', (req, res) => {
    res.sendFile(path.join(PATH_DIR + 'cari.html'));
});

app.get('/json', (req, res) => {
    const rawData = fs.readFileSync(__dirname + '/data/cars.json');
    const parsedJSON = JSON.parse(rawData);
    res.send(parsedJSON);
});

app.listen(PORT, () => console.log(`Server running at localhost : ${PORT}`));