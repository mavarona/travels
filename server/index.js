const express = require('express');
const PORT = process.env.PORT || 3002;
const path = require('path');
const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));

app.use('/', routes());

app.listen(PORT, () => {
    console.log('\x1b[33m%s\x1b[0m', `Server Running in port: ${PORT}`);
});