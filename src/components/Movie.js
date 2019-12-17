import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

const Movie = (props) => {
  const {id, title, overview, releaseDate, imageURL, inventory, externalId} = props;

  return (
    <section className='card'>
      <div className="card__content">
        <img src={imageURL}></img>
        <p className="card__content-title">{title}</p>
        <p className="card__content-date"> Released: {releaseDate}</p>
        <p className="card__content-overview">{overview}</p>
      </div>
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