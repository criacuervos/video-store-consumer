import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer.js';
import './CustomerList.css';
import axios from 'axios';

class CustomerSearch extends Component {

  constructor(props) {
    super();
    this.url = props.url;
    this.state = {
      customers: [],
    }
  }

  componentDidMount() {
    axios.get(this.url + 'customers')
      .then(response => {
        let { customers } = this.state;
        customers = response.data.map((customer, i) => {
          return (
            <Customer key={i} {...customer} />
          )
        });
        this.setState({
          customers
        })
      });
  }


  render() {
    return (
      <div>
      <header className="header">
        <h1 className="header__h1">
          <span className="header__text">
            Customers
          </span>
        </h1>
      </header>
        <div className="library">
          {this.state.customers}
        </div>
      </div>
    )
  }

}

CustomerSearch.propTypes = {
url: PropTypes.string.isRequired
}
export default CustomerSearch;