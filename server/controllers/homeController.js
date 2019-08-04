const Travel = require('../models/Travels');
const Comment = require('../models/Comments');

exports.infoHome = (req, res) => {
    const promises = [];
    promises.push(Travel.findAll({
        limit: 3
    }));
    promises.push(Comment.findAll({
        limit: 3
    }));
    const results = Promise.all(promises);
    results.then(result => {
            res.render('index', {
                page: 'Próximos Viajes',
                travels: result[0],
                comments: result[1],
                className: 'home'
            });
        })
        .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
}