const db = require('../db/config');

const Movie = {};

Movie.findAll = () => {
  return db.query('SELECT * FROM movies m');
}

Movie.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM movies
    WHERE id = $1
  `, [id]);
}

Movie.create = (movie, userid) => {
  return db.one(`
    INSERT INTO movies
    (title, genre, description, director, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [movie.title, movie.genre, movie.description, movie.director, userid]);
}

Movie.createReview = (movie, userid) => {
  return db.one(`
    INSERT INTO reviews
    (comments, userid)
    VALUES ($1)
    RETURNING *
  `, [movie.reviews, userid]);
}

Movie.update = (movie, id) => {
  return db.one(`
    UPDATE movies SET
    title = $1,
    description = $2,
    genre = $3,
    director = $4
    WHERE id = $5
    RETURNING *
  `, [movie.title, movie.description, movie.genre, movie.director, id]);
}

Movie.destroy = (id) => {
  return db.none(`
    DELETE FROM movies
    WHERE id = $1
  `, [id]);
}

module.exports = Movie;
