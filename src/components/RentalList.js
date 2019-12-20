import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class RentalList extends Component {
  
  constructor(props){
    super(props);
    this.url = props.url;
    // this.returnRentalCallback = props.returnRentalCallback;
    this.state = {
      rentals: []
    }
  }

  getCustomer = (id) => {
    return axios.get(this.url + '/customers/' + id)
      .then(response => {
        return response.data
      })
  }

  getMovie = (id) => {
    return axios.get(this.url + '/movies/id/' + id)
      .then(response => {
        return response.data
      })
  }
  
  componentDidMount() {
    
  axios.get(this.url + 'rentals')
    .then(response => {
      const rentalList = response.data.map((rental, i) => {
        const updatedRentals = this.state.rentals;
        rental.customer = {  };
        rental.movie = {  };
        updatedRentals.push(rental);
        this.getCustomer(rental.customer_id).then(
          (result)=> { 
            updatedRentals[i].customer = result;
            this.setState({
              rentals: updatedRentals
            })
          }
        );
        this.getMovie(rental.movie_id).then(
          (result)=> { 
            updatedRentals[i].movie = result;
            this.setState({
              rentals: updatedRentals
            })
          }
        );;
        rental.dueDate = new Date(rental.due_date).toDateString();
        
        return rental;
      })      
      this.setState({
        rentals: rentalList
      })
    })
    .catch((error) => {
      this.setState({
        error: 'Sorry, something went wrong!'
      });
    })
  }


  render() {
    
    const listRentals = this.state.rentals.map((rental, i) => {
        return (
          <tr key={i}>
            <td>
              Customer: {rental.customer.name}
            </td>
            <td>
              Movie: {rental.movie.title}
            </td>
            <td>
              {rental.dueDate}
            </td>
            <td>
              <button className="btn btn-outline-secondary">Return</button>
            </td>
          </tr>
        )
      })

    
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
            {listRentals}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default RentalList;