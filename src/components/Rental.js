import React, { Component } from 'react';
import axios from 'axios';

class Rental extends Component {
  constructor(props) {
    super();
    
  }

  render() {
    return (
      <div>
        <Customer />
        <Movie />
      </div>
    )
  }
}

export default Rental