import React from 'react';

const Movie = (props) => {
	return (
		<div className="movie">
	  		<h3>{props.movie.title}</h3>
			<p>Director: {props.movie.director}</p>
	  		<p>{props.movie.description}</p>
	  		<p>Genre: {props.movie.genre}</p>
	  		<span className="edit"    onClick={() => props.selectEditedMovie(props.movie.id)}>Edit</span><br/>
	  		<span className="delete" onClick={() => props.handleDeleteMovie(props.movie.id)}>Delete</span>
		</div>
	)
}

export default Movie;
