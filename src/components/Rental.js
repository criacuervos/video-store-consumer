import React, { Component } from 'react';
import axios from 'axios';

class Rental extends Component {
  constructor(props) {
    super();
    this.url = props.url
    this.state = {
      movie: props.movie,
      customer: props.customer
    }    
  }
  
  //This is how we add a rental logic!
  
  checkOut = () => {
    let due_date = new Date();
    due_date.setDate(due_date.getDate() + 7);

    let params = {
      movie_id: this.state.movie.id,
      customer_id: this.state.customer.id,
      due_date: due_date,
    }
    axios.post(this.url + 'rentals/' + this.state.movie.title + '/check-out/', params)
    .then(response => {
      console.log("success")

    })
  }

  checkOutButton = () => {
    if (this.state.movie.id && this.state.customer.id){
      return (<button onClick={this.checkOut}> Check out!</button>)
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
        {this.checkOutButton()}
      </div>
    )
  }
}

export default Rental