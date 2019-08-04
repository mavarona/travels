const express = require('express');
const router = express.Router();

const Travel = require('../models/Travels');
const Comment = require('../models/Comments');

module.exports = function() {
    router.get('/', (req, res) => {
        Travel.findAll({
                limit: 3
            })
            .then(travels => {
                res.render('index', {
                    page: 'Próximos Viajes',
                    travels,
                    className: 'home'
                });
            })
            .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
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
            .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
    });
    router.get('/travels/:id', (req, res) => {
        Travel.findByPk(req.params.id)
            .then(travel => {
                res.render('travel', {
                    travel
                });
            })
            .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
    });
    router.get('/comments', (req, res) => {
        Comment.findAll()
            .then(comments => {
                res.render('comments', {
                    page: 'Comentarios',
                    comments
                });
            })
            .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
    });
    router.post('/comments', (req, res) => {
        const { name, email, message } = req.body;
        let errors = [];
        if (!name) {
            errors.push({ message: 'Añade un nombre' });
        }
        if (!email) {
            errors.push({ message: 'Añade un correo electrónico' });
        }
        if (!message) {
            errors.push({ message: 'Añade un mensaje' });
        }
        if (errors.length > 0) {
            res.render('comments', {
                errors,
                name,
                email,
                message
            });
        } else {
            Comment.create({
                    name,
                    email,
                    message
                })
                .then(comment => res.redirect('/comments'))
                .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
        }
    });
    return router;
}