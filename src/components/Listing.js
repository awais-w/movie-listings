import React, { Component } from 'react';
import { extractGenre } from '../methods';
import { IMAGE_PATH } from '../constants';

let movies, genres;

export default class Listing extends Component {
  
    render() {
        movies = this.props.genreFilteredList;
        genres = this.props.genres;
        return (
            <React.Fragment>
                <h3 className="container marTopTwice marBottomTwice">Listing Movies by the order of Popularity</h3>
                <div className="listing-wrapper container">
                    <div className="row">
                    
                        {/* Looping through the list of movies */}
                        { movies.map((movie, i) => {
                            return (
                                <div key={i} className="col m4 l3">
                                    <div className="card hoverable">
                                        <div className="card-image">
                                            <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
                                            <span className="card-title">{movie.title}</span>
                                        </div>
                                        <div className="card-content">
                                            <ul className="genre-wrapper noMargin"><div>Genre:</div> {movie.genre_ids.map(gen => <li key={gen}>{extractGenre(gen, genres)}</li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    
                    </div>
                </div>
            </React.Fragment>
        )
        }
  }