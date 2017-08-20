import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import Login from './components/Login';
import Register from './components/Register';
import MoviesList from './components/MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
        auth: false,
        user: null,
        currentPage: 'home',
        currentMovieId: null,
        movieData: null,
    }
    //auth
    this.setPage = this.setPage.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit= this.handleRegisterSubmit.bind(this);
    this.logOut =  this.logOut.bind(this);

    //movies
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    this.handleMovieEditSubmit = this.handleMovieEditSubmit.bind(this);
    this.selectEditedMovie = this.selectEditedMovie.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

    setPage(page) {
        this.setState({
            currentPage: page,
        })
    }

    decideWhichPage() {
        switch(this.state.currentPage) {
            case 'home':
                return <Home />
                break;
            case 'login':
                if (!this.state.auth) {
                    return <Login handleLoginSubmit={this.handleLoginSubmit} />;
                } else return <Home />;
                break;
          case 'register':
            if (!this.state.auth) {
                return <Register handleRegisterSubmit={this.handleRegisterSubmit} />;
            } else return <Home />;

          case 'movies':
            return (<MoviesList
                movieData={this.state.movieData}
                userData={this.state.user}
                handleMovieSubmit={this.handleMovieSubmit}
                handleCommentSubmit = {this.handleCommentSubmit}
                handleMovieEditSubmit={this.handleMovieEditSubmit}
                selectEditedMovie={this.selectEditedMovie}
                handleDeleteMovie={this.handleDeleteMovie}
                currentMovieId={this.state.currentMovieId}  />)
            break;


          default:
            break;
        }
    }
   handleLoginSubmit(e, username, password) {
        e.preventDefault();
        axios.post('/auth/login', {
            username,
            password,
        }).then(res => {
            console.log(res.data.user);
            this.setState({
                auth: res.data.auth,
                user: res.data.user,
                currentPage: 'home',
            });
        }).catch(err => console.log(err));
     }


    handleRegisterSubmit(e, username, password, email) {
        console.log("Im here");
        e.preventDefault();
        axios.post('/auth', {
            username,
            password,
            email,
        }).then(res => {
            this.setState({
                auth: res.data.auth,
                user: res.data.user,
                currentPage: 'home',
            });
        }).catch(err => console.log(err));
    }


    logOut() {
        axios.get('/auth/logout')
        .then(res => {
            console.log(res);
            this.setState({
                auth: false,
                currentPage: 'home',
            });
        }).catch(err => console.log(err));
    }
    componentDidMount() {
    axios.get('/movies')
      .then(res => {
        this.setState({
          movieData: res.data.data,
        });
      }).catch(err => console.log(err));
    }

    handleMovieSubmit(e, title, description, genre,director) {
        e.preventDefault();
        axios.post('/movies', {
            title,
            description,
            genre,
            director,
        }).then(res => {
            this.resetMovies();
        }).catch(err => console.log(err));
    }

    handleCommentSubmit(e, comments) {
        e.preventDefault();
        axios.post('/movies', {
            comments,
        }).then(res => {
            this.resetMovies();
        }).catch(err => console.log(err));
    }

    handleMovieEditSubmit(e, title, description, genre,director) {
        e.preventDefault();
        axios.put(`/movies/${this.state.currentMovieId}`, {
            title,
            description,
            genre,
            director,
        }).then(res => {
            this.resetMovies();
        }).catch(err => console.log(err));
    }

  handleDeleteMovie(id) {
    axios.delete(`/movies/${id}`,{
        id,
    }).then(res => {
        console.log("reset");
        this.resetMovies();
    }).catch(err => console.log(err));
  }

  selectEditedMovie(id) {
    this.setState({
      currentMovieId: id,
    })
  }

  // RENDER

  resetMovies() {
      axios.get('/movies')
      .then(res => {
          this.setState({
              movieData: res.data.data,
              currentMovieId: null,
          })
      }).catch(err => console.log(err));
  }

// RENDER
  render() {
    return (
      <div className="App">
        <Header setPage={this.setPage} logOut={this.logOut} />
        {this.decideWhichPage()}
        <Footer />
      </div>
    );
  }
}


export default App;
