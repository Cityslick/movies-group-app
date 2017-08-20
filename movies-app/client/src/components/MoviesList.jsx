import React from 'react';

import Movie from './Movie';
import MovieAddForm from './MovieAddForm';
import MovieEditForm from './MovieEditForm';

const MoviesList = (props) => {
    return (
        <div className="movies-list">
            <MovieAddForm handleMovieSubmit={props.handleMovieSubmit} />
            {props.movieData.map(movie => {
            if (props.currentMovieId === movie.id) {
                return <MovieEditForm key={movie.id} userData={props.userData} movie={movie} handleMovieEditSubmit={props.handleMovieEditSubmit} />
            } else return <Movie   userData={props.userData}yy movie={movie} selectEditedMovie={props.selectEditedMovie} handleDeleteMovie={props.handleDeleteMovie}   key={movie.id} />
          })}
        </div>
    )
}

export default MoviesList;
