import React, { Component } from 'react';
import './App.css';
import RentalLibrary from './components/RentalLibrary';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import CustomerSearch from './components/CustomerSearch';
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

  render() {
    return (
      <Router>
        <section>
          <Navbar bg="light" sticky="top">
            <Navbar.Brand>
              <Link to={`/home`}> Home </Link>
            </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  Rental Library
                </Nav.Link>
                <Nav.Link>
                  Search All Movies
                </Nav.Link>
                <Link to='/customers'>
                  List of Customers
                </Link>
              </Nav>
          </Navbar>
          <Switch>
            <Route path='/customers'>
              <CustomerSearch url={url} />
            </Route>
          </Switch>
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
      </Router>
    );
  }
}

export default App;
