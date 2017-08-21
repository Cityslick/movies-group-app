import React from 'react';

import Movie from './Movie';
import MovieAddForm from './MovieAddForm';
import MovieEditForm from './MovieEditForm';


const MoviesList = (props) => {
  return (
    <div className="movies-list">
          {(props.userData) ? <MovieAddForm handleMovieSubmit={props.handleMovieSubmit} /> : ""}
      <div className="movie-detail">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Description</th>
              <th>Genre</th>
              <th>_______</th>
              <th>_______</th>
            </tr>
          </thead>
          <tbody>
            {props.movieData.map(movie => {
              if (props.currentMovieId === movie.id) {
                return <MovieEditForm key={movie.id} movie={movie} handleMovieEditSubmit={props.handleMovieEditSubmit} />
              } else return <Movie movie={movie} selectEditedMovie={props.selectEditedMovie} handleDeleteMovie={props.handleDeleteMovie} userData={props.userData}  key={movie.id} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MoviesList;
