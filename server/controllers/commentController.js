const Comment = require('../models/Comments');

exports.showComments = async(req, res) => {
    const comments = await Comment.findAll();
    res.render('comments', {
        page: 'Comentarios',
        comments
    });
}
exports.addComment = async(req, res) => {
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
        const comments = await Comment.findAll();
        res.render('comments', {
            errors,
            name,
            email,
            message,
            page: 'Comentarios',
            comments
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