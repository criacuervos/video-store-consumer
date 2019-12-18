import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Movie.css'
import axios from 'axios';

const Movie = (props) => {

  const { selectMovieCallback, inRentalLibrary, url, id, title, overview, release_date, image_url, inventory, externalId } = props;


  const addMovie = () => {
    axios.post(url + 'movies', {title, overview, release_date, inventory})
      .then(response => {
        console.log("success");
        console.log(response.data);        
    })
  }

  const movieButton = () => {
    if (!inRentalLibrary) {
      return (
        <button onClick={addMovie}>Add To Rental Library</button>
      )
    } else {
      return (
        <button onClick={() => { selectMovieCallback(props.id) }}>Select Movie To Rent</button>
      )
    }
  }
  return (
    <section className='card'>
      <div className="card__content">
        <img src={image_url}></img>
        <p className="card__content-title">{title}</p>
        <p className="card__content-date"> Released: {release_date}</p>
        <p className="card__content-overview">{overview}</p>
      </div>
      {movieButton()}
    </section>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
}

export default Movie;