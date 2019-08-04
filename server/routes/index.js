const express = require('express');
const router = express.Router();

module.exports = function() {
    router.get('/', (req, res) => {
        res.render('index', {
            page: 'Agencia de viajes'
        });
    });
    router.get('/about', (req, res) => {
        res.render('about', {
            page: 'Sobre Nosotros'
        });
    });

    return router;
}