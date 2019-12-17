import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Movie.css'
import axios from 'axios';

const Movie = (props) => {
  const { url, id, title, overview, releaseDate, imageURL, inventory, externalId } = props;

  const addMovie = () => {
    axios.post(url + 'movies', {title, overview, releaseDate, inventory})
      .then(response => {
        console.log("success");
        console.log(response.data);        
    })
  }

  return (
    <section className='card'>
      <div className="card__content">
        <img src={imageURL}></img>
        <p className="card__content-title">{title}</p>
        <p className="card__content-date"> Released: {releaseDate}</p>
        <p className="card__content-overview">{overview}</p>
      </div>
      <button onClick={addMovie}>Add To Rental Library</button>
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