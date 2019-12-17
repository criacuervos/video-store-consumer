import React, { Component } from 'react';
import './App.css';
import RentalLibrary from './components/RentalLibrary';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Link} from 'react-router-dom';

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
                  Rental Library
                </Nav.Link>
                <Nav.Link>
                  Search All Movies
                </Nav.Link>
                <Nav.Link>
                  List of Customers
                </Nav.Link>
              </Nav>
          </Navbar>
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
