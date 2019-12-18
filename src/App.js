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
import Rental from './components/Rental';
const MOVIEDB_KEY = process.env.MOVIEDB_KEY;
const url = 'http://localhost:3000/';

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedMovie: '',
      selectedCustomer: ''
    }
  }

  selectCustomer = (customerId) => {
    axios.get(url + 'customers/' + customerId)
      .then(response => {
        const selectedCustomer = response.data;
        this.setState({
          selectedCustomer: selectedCustomer,
          // a rental id is added as a key
          // the key change is what triggers the state to change in the child component
          // there is probably a better way to solve this
          rentalKey: selectedCustomer.id
        })        
      })    
  }
  
  selectMovie = (movieId) => {
    axios.get(url + 'movies')
      .then(response => {
        const selectedMovie = response.data.filter(movie => {
          return movie.id === movieId
        })        
        this.setState({
          selectedMovie: selectedMovie[0],
          // a rental id is added as a key
          // the key change is what triggers the state to change in the child component
          // there is probably a better way to solve this
          rentalKey: selectedMovie[0].id
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

            {/* this displays the current movie & customer in Rental */}
            <Rental
              url={url}
              key={this.state.rentalKey}
              movie={this.state.selectedMovie}
              customer={this.state.selectedCustomer} />

          </Navbar>
          <Switch>
            <Route path='/home'>
              <Home url={url}/>
            </Route>
            
            <Route path='/customers'>
              <CustomerList url={url} selectCustomerCallback={this.selectCustomer}/>
            </Route>

            <Route path='/moviesearch'>
              <MovieSearch url={url} />
            </Route>

            <Route path='/rental-library'>
              <RentalLibrary selectMovieCallback={this.selectMovie}/>
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
