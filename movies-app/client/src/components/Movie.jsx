import React from 'react';

const Movie = (props) => {
	let showOption= false;
	if (props.userData){
		props.userData.id === props.movie.user_id ?  showOption =true  :  showOption =false
		console.log(props.userData.id , props.movie.user_id);
	}
	return (
		<div className="movie">
	  		<h3>{props.movie.title}</h3>
			<p>Director: {props.movie.director}</p>
	  		<p>{props.movie.description}</p>
	  		<p>Genre: {props.movie.genre}</p>
	  		<span className={`edit ${!showOption ? 'notVissible': ''}`}   onClick={() => props.selectEditedMovie(props.movie.id)}>Edit</span><br/>
	  		<span className={`delete ${!showOption ? 'notVissible': ''}`} onClick={() => props.handleDeleteMovie(props.movie.id)}>Delete</span>
		</div>
	)
}

export default Movie;
