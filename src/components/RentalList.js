import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class RentalList extends Component {
  
  constructor(props){
    super(props);
    this.url = props.url;
    this.returnRentalCallback = props.returnRentalCallback;
    this.state = {
      rentals: [],
    };
  }

  componentDidMount () {
    this.listRentals()
  }

  getCustomer(id) {
    axios.get(this.url + '/customers/' + id)
      .then(response => {
        console.log(response.data);
        
        return response.data
      })
  }
  getMovie(id) {
    axios.get(this.url + '/movies/id/' + id)
      .then(response => {
        console.log(response.data);
        return response.data
      })
  }

getRentals = () => {
  axios.get(this.url + 'rentals')
    .then(response => {
      const rentals = response.data.map((rental, i) => {
        rental.customer = this.getCustomer(rental.customer_id);
        rental.movie = this.getMovie(rental.movie_id);
      })
      this.setState({
        rentals: rentals
      })
    })
    .catch((error) => {
      this.setState({
        error: 'Sorry, something went wrong!'
      });
    })
  return this.listRentals;
}

  displayRentals = this.getRentals();
  componentDidMount() {
    this.getRentals()
  }
  
  listRentals = () => {
    this.state.rentals.forEach((rental, i) => {
      return (
        <tr key={i}>
          <td>
            {rental.customer.name}
          </td>
          <td>
            {rental.movie.title}
          </td>
          <td>
          {new Date(rental.due_date).toDateString()}
          </td>
          <td>
            <button className="btn btn-outline-secondary">Return</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <Table>
          <tr>
            <th>
          Customer Name
          </th>
          <th>
          Movie Title
          </th>
          <th>
          Due Date
          </th>
          <th>
          Return Rental
          </th>
          </tr>
          <tbody>
            {this.displayRentals}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default RentalList;