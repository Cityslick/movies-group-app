const express = require('express');
const favoritesRoutes = express.Router();

const moviesController = require('../controllers/movies-controller');

favoritesRoutes.get('/', moviesController.favorites);
favoritesRoutes.post('/', moviesController.add);

module.exports = favoritesRoutes;
