import React from 'react';

const Favorites = () => {
  constructor() {
    super();
    this.state = {
      movieData: null,
      user: null,
    }

  showFavorites() {
    axios.get('/favorites')
      .then(res => {
        console.log( res.data.data);
        this.setState({
          movieData: res.data.data,
        });
      }).catch(err => console.log(err));
  }

  }
  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      {props.movieData.map(movie => {
        return <Favorite movie={movie} key={movie.id} />
      })}
    </div>
  )
}

export default Favorites;
