import React, { Component } from 'react';
import axios from 'axios';

class Rental extends Component {
  constructor(props) {
    super();
    this.returned = props.returned;
    this.state = {
      movie: props.movie,
      customer: props.customer,
    }    
  }
  
  rentalMovie = () => {
    if (this.state.movie.id) {
      return (
        <span>
          Movie To Rent: {this.state.movie.title} 
          <img className='img-icon' src={this.state.movie.image_url} />
        </span>
      )
    }
  }

  rentalCustomer = () => {
    if (this.state.customer.id) {
      return (
        <span>
          Customer: {this.state.customer.name} 
        </span>
      )
    }
  }

  // this is how we remove a rental
  returnRentalButton = () => {
    if (this.returned === false) {
      return (
        <button onClick={this.returnRental}>Return</button>
      )
    }
  }
  returnRental = () => {
    let params = {
      movie_id: this.state.movie.id,
      customer_id: this.state.customer.id
    }
    axios.post(this.url + 'rentals/' + this.state.movie.title + '/return/', params)
      .then(response => {
        console.log("successfully returned movie " + response.data.title);
    })
  }

  render() {
    return (
      <div>
        {this.rentalMovie()}
        {this.rentalCustomer()}
        {this.returnRentalButton()}
      </div>
    )
  }
}

export default Rental