import React, { Component } from 'react';
import './App.css';
import RentalLibrary from './components/RentalLibrary';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import CustomerList from './components/CustomerList';
import MovieSearch from './components/MovieSearch';
const MOVIEDB_KEY = process.env.MOVIEDB_KEY;
const url = 'http://localhost:3000/';

class App extends Component {

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
                  <Link to={`/rental-library`}>Rental Library</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/moviesearch'}>
                    Search All Movies
                  </Link>
                </Nav.Link>
              <Nav.Link>
                  <Link to='/customers'>
                    List of Customers
                  </Link>
                </Nav.Link>
              </Nav>
          </Navbar>
          <Switch>
            <Route path='/home'>
              <Home url={url}/>
            </Route>
            
            <Route path='/customers'>
              <CustomerList url={url} />
            </Route>

            <Route path='/moviesearch'>
              <MovieSearch url={url} />
            </Route>

            <Route path='/rental-library'>
              <RentalLibrary/>
            </Route>

            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
