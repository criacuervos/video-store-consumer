import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie.js';
import { Form } from 'react-bootstrap';
import axios from 'axios';

class MovieSearch extends Component {
  constructor(props) {
    super();
    this.url = props.url;
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios.get(this.url + 'movies')
      .then(response => {
        let { movies } = this.state;
        movies = response.data.map((movie, i) => {
          return (
            <Movie key={i} {...movie} />
          )
        });
        this.setState({
          movies
        })
      });
  }

  getSearchResults = (event) => {
    axios.get(this.url + 'movies?query=' + event.target.value)
      .then(response => {
        let { movies } = this.state;
        movies = response.data.map((movie, i) => {
          return (
            <Movie key={i} {...movie} />
          )
        });
        this.setState({
          movies
        })
    })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId='formMovieSearch'>
            <Form.Label>Search movies</Form.Label>
            <Form.Control type='text' onChange={(event) => { this.getSearchResults(event) }}></Form.Control>
          </Form.Group>
        </Form>

        <div className="library">
          {this.state.movies}
        </div>
      </div>
    )
  }

}
MovieSearch.propTypes = {

}
export default MovieSearch;