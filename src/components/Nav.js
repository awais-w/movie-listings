import React, { Component } from 'react';
import { extractGenre } from '../methods';

let movies, genres, selectedGenres=[], ratingsArr=[];

for (let x=0; x<=10; x+=0.5) {
    ratingsArr.push(x);
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.filterToggler = React.createRef();
    }
    filterToggle(e) {
        e.preventDefault();
        this.toggleFilter();
    }

    toggleFilter () {
        const el = this.filterToggler.current;
        if (el) {
        if (el.classList.contains('closed')) {
            el.classList.add('opened');
            el.classList.remove('closed');
        } else {
            el.classList.add('closed');
            el.classList.remove('opened');
        }}
    }

    getAvailableGenres() {
        let availableGenres = [];

        // get all the genres from the movies
        movies.map( m => m.genre_ids.map( id => availableGenres.push(id) ) );

        // remove duplicates from the array
        let nonDuplicateList = availableGenres.filter((el, i, self) => i === self.indexOf(el));
        
        // close filter panel after user input
        // this.toggleFilter();
        
        return nonDuplicateList;
    }

    handleGenreFilter (e) {
        // building array based on the genre selection
        e.target.checked ? 
            selectedGenres.push(e.target.id) :
            selectedGenres = selectedGenres.filter(id => id !== e.target.id);
        // and then passing it down to the parent state
        this.props.handleFilters(selectedGenres, this.props.minimumRating);
    }

    handleRatingsFilter (e) {
        this.props.handleFilters(selectedGenres, e.target.value);
    }

    render() {
        movies = this.props.movies;
        genres = this.props.genres;
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper container">
                        <div className="site-title left">Movie Listings</div>
                        <a ref={this.filterToggler} className="right closed" onClick={this.filterToggle.bind(this)} href="/" data-target="dropdown1">Filters<i className="material-icons right">arrow_drop_down</i></a>
                        
                        <div className="filters-container row clr">
                            <div className="row">
                                <div className="col s8">
                                    <div className="left mar10Right">Filter by Ratings</div>
                                    <div className="left">
                                        {/* populate ratings */}
                                        <select defaultValue={this.props.minimumRating} onChange={this.handleRatingsFilter.bind(this)}>
                                            {ratingsArr.map(val => {
                                                return <option key={val} value={val}>{val}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col s4"><button className="waves-effect waves-light btn right" onClick={this.toggleFilter.bind(this)}>Close</button></div>
                            </div>

                            <div className="clr">Filter by Genre</div>
                            <ul className="genres col s12">
                                {/* populate available genres */}
                                {this.getAvailableGenres().map(genre => {
                                    return (
                                        <li key={genre}><label>
                                            <input type="checkbox" id={genre} onChange={this.handleGenreFilter.bind(this)}/><span>{extractGenre(genre, genres)}</span>
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
