import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import RentalLibrary from './components/RentalLibrary';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
        <h1 className="header__h1">
          <span className="header__text">
          Welcome to the Video Store 🎥 
          </span>
        </h1>
        </header>
        <div>
          <RentalLibrary />
        </div>
      </section>
    );
  }
}

export default App;
