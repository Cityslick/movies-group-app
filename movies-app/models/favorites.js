const db = require('../db/config');

const Add = {};

Add.findAll = () => {
  return db.query('SELECT * FROM favorites');
}

Add.create = (favorites, userid) => {
  return db.one(`
    INSERT INTO favorites
    (title, genre, description, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [movie.title, movie.genre, movie.description, userid]);
}

module.exports = Add;
