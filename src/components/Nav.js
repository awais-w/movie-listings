import React, { Component } from 'react';
import { extractGenre } from '../methods';

let movies, genres, selectedGenres=[];

class Nav extends Component {
    filterToggle(e) {
        e.preventDefault()
        const el = e.target;
        if (el.classList.contains('closed')) {
            el.classList.add('opened');
            el.classList.remove('closed');
        } else {
            el.classList.add('closed');
            el.classList.remove('opened');
        }
    }

    getAvailableGenres() {
        let availableGenres = [];

        // get all the genres from the movies
        movies.map( m => m.genre_ids.map( id => availableGenres.push(id) ) );

        // remove duplicates from the array
        let nonDuplicateList = availableGenres.filter((el, i, self) => i === self.indexOf(el));
        
        return nonDuplicateList;
    }

    handleCheckboxFilter (e) {
        // building array based on the genre selection
        e.target.checked ? 
            selectedGenres.push(e.target.id) :
            selectedGenres = selectedGenres.filter(id => id !== e.target.id);
        // and then passing it down to the parent state
        this.props.filterByGenre(selectedGenres);
    }

    render() {
        movies = this.props.movies;
        genres = this.props.genres;
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper container">
                        <div className="site-title left">Movie Listings</div>
                        <a className="right closed" onClick={this.filterToggle} href="/" data-target="dropdown1">Filters<i className="material-icons right">arrow_drop_down</i></a>
                        <div className="filters-container row clr">
                            <div>Filter by Genre</div>
                            <ul className="genres col s12">
                                {/* populate available genres */}
                                {this.getAvailableGenres().map(genre => {
                                    return (
                                        <li key={genre}><label>
                                            <input type="checkbox" id={genre} onChange={this.handleCheckboxFilter.bind(this)}/><span>{extractGenre(genre, genres)}</span>
                                        </label></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    
                </nav>
            </div>
        );
    }
}

export default Nav;
