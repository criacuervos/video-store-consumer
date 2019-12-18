import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';
import './RentalLibrary.css';


class RentalLibrary extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount () {
    this.listMovies()
  }

  listMovies(){
    axios.get('http://localhost:3000/movies')

    .then(response => {
      const movies = response.data.map((obj) => {
        return obj
      })

      this.setState({
        movies: movies
      })
    })

    .catch((error) => {
      this.setState({
        error: 'Sorry, something went wrong!'
      });
    })
  }

  render(){
    const movies = this.state.movies.map((movie, i) => {
      return <Movie 
                inRentalLibrary={true}
                key={i}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                image_url={movie.image_url}
                release_date={(movie.release_date)}
              />;
      });
    return (
      <section>
        <div>
          <div className='library'>
            {movies}
          </div>
        </div>
      </section>
    )

  }
}

RentalLibrary.propTypes = {
}

export default RentalLibrary;