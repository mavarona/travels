const express = require('express');
const router = express.Router();

const aboutController = require('../controllers/aboutController');
const homeController = require('../controllers/homeController');
const travelController = require('../controllers/travelController');
const commentController = require('../controllers/commentController');

module.exports = function() {
    router.get('/', homeController.infoHome);
    router.get('/about', aboutController.infoAbout);
    router.get('/travels', travelController.showTravels);
    router.get('/travels/:id', travelController.showTravel);
    router.get('/comments', commentController.showComments);
    router.post('/comments', commentController.addComment);
    return router;
}