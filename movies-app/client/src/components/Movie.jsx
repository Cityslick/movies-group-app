import React from 'react';

const Movie = (props) => {
	let showOption= false;
	if (props.userData){
		props.userData.id === props.movie.user_id ?  showOption =true  :  showOption =false
		console.log(props.userData.id , props.movie.user_id);
	}
	return (
		<tr className="movie">
	  		<td className={"tdDescription"}>{props.movie.title}</td>
			<td className={"tdDescription"}>{props.movie.director}</td>
	  		<td className={"tdDescription"}>{props.movie.description}</td>
	  		<td>{props.movie.genre}</td>
	  		<td><span className={`button ${!showOption ? 'notVissible': ''}`}   onClick={() => props.selectEditedMovie(props.movie.id)}>Edit</span></td><br/>
	  		<td><span className={`button ${!showOption ? 'notVissible': ''}`} onClick={() => props.handleDeleteMovie(props.movie.id)}>Delete</span></td>
		</tr>
	)
}

export default Movie;
