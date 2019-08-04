const Comment = require('../models/Comments');

exports.showComments = (req, res) => {
    Comment.findAll()
        .then(comments => {
            res.render('comments', {
                page: 'Comentarios',
                comments
            });
        })
        .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
}

exports.addComment = (req, res) => {
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
}