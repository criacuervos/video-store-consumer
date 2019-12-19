import React, {Component} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

class NewCustomerForm extends Component {
  constructor(props) {
    super();
    this.url = props.url;
    this.state = {
      name: '',
      address: '',
      city: '',
      state: 'WA',
      postal_code: '',
      phone: ''
    }
  }
  updateForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;    
    this.setState({
      [name]: value
    })
  }

  addNewCustomer = (event) => {
    event.preventDefault();
    const { name, address, city, state, postal_code, phone } = this.state;
    
    axios.post(this.url + 'customers', {name, address, city, state, postal_code, phone})
      .then(response => {
        console.log(response);
        console.log('successfully added customer');
      })
      .catch(error => {
        console.log(error);
    })
  }

  render() {
    return (
      <Form onSubmit={(event) => { this.addNewCustomer(event) }} className="card">
        <Form.Label>
          Add New Customer
        </Form.Label>
        <Form.Group controlId="formGridCustomer">
          <Form.Control name="name" onChange={this.updateForm} placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formGridAddress">
          <Form.Control name="address" onChange={this.updateForm} placeholder="Street Address" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control name="city" onChange={this.updateForm} placeholder="City" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control name="state" onChange={this.updateForm} as="select">
              <option>State...</option>
              <option>WA</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPostalCode">
            <Form.Control name="postal_code" onChange={this.updateForm} placeholder="98101" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group controlId="formGridPhone" as={Col}>
          <Form.Control name="phone" onChange={this.updateForm} placeholder="Phone" />
        </Form.Group>
        <Form.Group as={Col}>
          <Button variant="primary" type="submit">
        Submit
        </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    )
  }
}
export default NewCustomerForm;
