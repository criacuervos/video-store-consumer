import React from 'react';
import RentalLibrary from './RentalLibrary';

const Home = () => {

  return (
    <div>
      <header className="header">
      <h1 className="header__h1">
        <span className="header__text">
        Welcome to the Video Store 🎥 
        </span>
      </h1>
      </header>
      <div>
        <p> HOME PAGE</p>
        <RentalLibrary/>
      </div>
    </div>
  )
}

export default Home;