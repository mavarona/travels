const express = require('express');
const router = express.Router();

const Travel = require('../models/Travels');

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
    router.get('/travels', (req, res) => {
        Travel.findAll()
            .then(travels => {
                res.render('travels', {
                    page: 'Próximos Viajes',
                    travels
                });
            })
            .catch(err => console.log('\x1b[36m%s\x1b[0m', err));
    });
    router.get('/travels/:id', (req, res) => {
        Travel.findByPk(req.params.id)
            .then(travel => {
                res.render('travel', {
                    travel
                });
            })
            .catch(err => console.log('\x1b[36m%s\x1b[0m', err));
    });

    return router;
}