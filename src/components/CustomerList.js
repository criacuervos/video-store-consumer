import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer.js';
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
        <header>
          Customers
        </header>
        {this.state.customers}
      </div>
    )
  }

}

CustomerSearch.propTypes = {
url: PropTypes.string.isRequired
}

export default CustomerSearch;