const Sequalize = require('sequelize');

const db = require('../config/database');

const Comment = db.define('comment', {
    name: {
        type: Sequalize.STRING
    },
    email: {
        type: Sequalize.STRING
    },
    message: {
        type: Sequalize.STRING
    },
});

module.exports = Comment;