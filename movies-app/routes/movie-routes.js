const express = require('express');
const movieRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const moviesController = require('../controllers/movies-controller');


movieRoutes.get('/', moviesController.index);
movieRoutes.get('/:id', moviesController.show);
movieRoutes.post('/', authHelpers.loginRequired, moviesController.create);
movieRoutes.put('/:id', authHelpers.loginRequired, moviesController.update);
movieRoutes.delete('/:id', authHelpers.loginRequired, moviesController.delete);

module.exports = movieRoutes;