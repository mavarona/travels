const Sequalize = require('sequelize');

const db = require('../config/database');

const Travel = db.define('travel', {
    title: {
        type: Sequalize.STRING
    },
    price: {
        type: Sequalize.FLOAT
    },
    date_from: {
        type: Sequalize.DATE
    },
    date_to: {
        type: Sequalize.DATE
    },
    img: {
        type: Sequalize.STRING
    },
    description: {
        type: Sequalize.STRING
    },
    availables: {
        type: Sequalize.INTEGER
    }
});

module.exports = Travel;

// db.authenticate()
//     .then(() => console.log('\x1b[36m%s\x1b[0m', 'Connected to database travelAgency'))
//     .catch(err => console.log('\x1b[36m%s\x1b[0m', err));