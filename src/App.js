import React, { Component } from 'react';
import axios from 'axios';

import Nav from './components/Nav';
import Listing from './components/Listing';

import {
  API_KEY,
  MOVIES_ENDPOINT,
  GENRES_ENDPOINT,
  LANGUAGE
} from './constants'

// import './App.css';
import './scss/style.scss';


class App extends Component {
  state = {
    movies: [],
    genres: [],
    genreFilteredList: [],
    minimumRating: 3
  }

  handleFilters = (list, rating) => {

    let filteredArr = this.state.movies;

    // filtering movie list by selected genres
    if (list) {
      list.map (g_id => filteredArr = filteredArr.filter( movie => {
          return movie.genre_ids.filter(g => (g === Number(g_id))).length;
        })
      );
    }
    
    // filtering movie list by selected rating
    filteredArr = filteredArr.filter( movie => movie.vote_average >= rating);
    this.setState({minimumRating:rating});

    // Populating filtered list in the state which passes through to the Listing component
    this.setState({genreFilteredList: filteredArr});

  }

  componentDidMount() {
  
      // api call to get the movie listing 
      axios.get(`${MOVIES_ENDPOINT}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
          .then(res => {
              const movies = res.data.results;
              // sorting by popularity in decending order
              movies.sort((a, b) => parseFloat(a.popularity) + parseFloat(b.popularity));
              // store the payload in component state
              this.setState({ movies });
              
              //initializing the handleFilters method - its important to initialize it in order to pass the movie data to the listing component
              this.handleFilters([], this.state.minimumRating);

          });

      // api call to get the genres
      axios.get(`${GENRES_ENDPOINT}?api_key=${API_KEY}&language=${LANGUAGE}`)
          .then(res => {
              const genres = res.data.genres;
              // store the payload in component state
              this.setState({ genres });
          });
  }

  render() {
    return (
      <div className="App">
        {/* passing state and parent function to the Nav component */}
        <Nav {...this.state} handleFilters={this.handleFilters}/>
        {/* Passing state to Listing component */}
        <Listing {...this.state} />
      </div>
    );
  }
}

export default App;
