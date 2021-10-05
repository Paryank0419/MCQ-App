const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public'));

app.use('/admin', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'adminPanel.html'));
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');