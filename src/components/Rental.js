import React, { Component } from 'react';
import axios from 'axios';

class Rental extends Component {
  constructor(props) {
    super();
    this.state = {
      movie: props.movie,
      customer: props.customer
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

  render() {
    return (
      <div>
        {this.rentalMovie()}
        {this.rentalCustomer()}
      </div>
    )
  }
}

export default Rental