import React, {Component} from 'react';

class MovieEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.movie.title,
      desc: this.props.movie.description,
      genre: this.props.movie.genre,
      director: this.props.movie.director,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="edit">
        <form onSubmit={(e) => this.props.handleMovieEditSubmit(e, this.state.title, this.state.desc, this.state.genre, this.state.director)}>

          <td className="movie">
              <label> Title
                <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} />
              </label>
              <label> Description
                <input type="text" name="desc" placeholder="Description" value={this.state.desc} onChange={this.handleInputChange} />
              </label>
              <label> Genre
                <input type="text" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleInputChange} />
              </label>
              <label> Director
                <input type="text" name="director" placeholder="Director" value={this.state.director} onChange={this.handleInputChange} />
              </label>

          </td>

          <input type="submit" value="Update Movie" />
        </form>
      </div>
    )
  }
}

export default MovieEditForm;
