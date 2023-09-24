const express = require('express');
const path = require('path');

const app = express();
const port = 8085;

app.use(express.static(path.join(__dirname, 'web', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'dist', "index.html"));
});

app.get('/:file', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'dist', req.params.file));
});

app.get('/assets/:file', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'dist', 'assets', req.params.file));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});