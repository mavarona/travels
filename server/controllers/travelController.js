const Travel = require('../models/Travels');

exports.showTravels = (req, res) => {
    Travel.findAll()
        .then(travels => {
            res.render('travels', {
                page: 'Próximos Viajes',
                travels
            });
        })
        .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
}

exports.showTravel = (req, res) => {
    Travel.findByPk(req.params.id)
        .then(travel => {
            res.render('travel', {
                travel
            });
        })
        .catch(err => console.log('\x1b[41m%s\x1b[0m', err));
}