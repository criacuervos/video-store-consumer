import React, { Component } from 'react';
import axios from 'axios';

class Rental extends Component {
  constructor(props) {
    super();
  }

  checkOut = () => {
    let due_date = new Date();
    due_date.setDate(due_date.getDate() + 7);

    let params = {
      movie_id: this.props.movie.id,
      customer_id: this.props.customer.id,
      due_date: due_date,
    }
    axios.post(this.props.url + 'rentals/' + this.props.movie.title + '/check-out/', params)
    .then(response => {
      console.log("successfully checked out");
      this.setState({
        returned: false,
      });
      this.props.resetRentalSelections();
    })
  }

  checkOutButton = () => {
    if (this.props.movie.id && this.props.customer.id){
      return (<button onClick={this.checkOut}> Check out!</button>)
    }
  }

  rentalMovie = () => {
    if (this.props.movie.id) {
      return (
        <span>
          Movie To Rent: {this.props.movie.title} 
          <img className='img-icon' src={this.props.movie.image_url} />
        </span>
      )
    }
  }

  rentalCustomer = () => {
    if (this.props.customer.id) {
      return (
        <span>
          Customer: {this.props.customer.name} 
        </span>
      )
    }
  }

  // this is how we remove a rental
  // returnRentalButton = () => {
  //   if (this.state.returned === false) {
  //     return (
  //       <button onClick={this.returnRental}>Return</button>
  //     )
  //   }
  // }
  
  returnRental = () => {
    let params = {
      movie_id: this.props.movie.id,
      customer_id: this.props.customer.id
    }
    axios.post(this.props.url + 'rentals/' + this.props.movie.title + '/return/', params)
      .then(response => {
        console.log("successfully returned movie " + response.data.title);
    })
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