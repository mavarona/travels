const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const configs = require('./config');

require('dotenv').config({ path: 'variables.env' });

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));

const config = configs[app.get('env')];
app.locals.title = config.nameSite;

app.use((req, res, next) => {
    const date = new Date();
    res.locals.currentYear = date.getFullYear();
    res.locals.pathPage = req.path;
    return next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

const port = process.env.PORT || 3002;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
    console.log('\x1b[32m%s\x1b[0m', `Server Running in the host: ${host} and port: ${port}`);
});