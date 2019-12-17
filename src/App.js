import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const MOVIEDB_KEY = process.env.MOVIEDB_KEY;
const url = 'http://localhost:3000/';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchResults: []
    }
  }

  getSpecificMovie = (movieTitle) => {
    axios.get(url + 'movies?query=' + movieTitle)
      .then(response => {
        console.log(response);
        this.setState({
          searchResults: response.data
        })
    })
    
  }

  componentDidMount() {
    this.getSpecificMovie('Jaws 3-D');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>
            All the Get/Search requests:
          </p>
          <p>
            Get list of movies:
            <code>GET /movies</code>
          </p>
          <p>
            Get a specific movie:
            <code>GET /movies?query=Psycho</code>
          </p>
          <p>
            {this.state.searchResults.length > 0 ? this.state.searchResults[0].title : 'none!'}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
