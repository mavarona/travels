const Travel = require('../models/Travels');
const Comment = require('../models/Comments');

exports.infoHome = async(req, res) => {

    const travels = await Travel.findAll({
        limit: 3
    });

    const comments = await Comment.findAll({
        limit: 3
    });

    res.render('index', {
        page: 'Próximos Viajes',
        travels,
        comments,
        className: 'home'
    });

}