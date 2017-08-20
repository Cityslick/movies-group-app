const Movie = require('../models/movie');
const Favorites = require('../models/favorites');


const movieController = {};

movieController.index = (req, res) => {
  Movie.findAll()
    .then(movies => {
      res.json({
        message: 'ok',
        data: movies,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

movieController.favorites = (req, res) => {
  Favorites.findAll()
    .then(movies => {
      res.json({
        message: 'ok',
        data: movies,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

movieController.show = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.json({
        message: 'ok',
        data: movie,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

movieController.create = (req, res) => {
  Movie.create({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
  }, 1).then(() => {
    res.redirect('/movies');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

movieController.add = (req, res) => {
  Favorites.create({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
  }, 1).then(() => {
    res.redirect('/movies');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

movieController.update = (req, res) => {
  Movie.update({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
  }, req.params.id).then(movie => {
    res.redirect(`/movies/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

movieController.edit = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/movie-single-edit', {
        currentPage: 'edit',
        data: movie,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

movieController.delete = (req, res) => {
  Movie.destroy(req.params.id)
    .then(() => {
      res.redirect('/movies');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = movieController;
