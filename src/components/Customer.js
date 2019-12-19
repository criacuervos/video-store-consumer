import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {
  const { selectCustomerCallback, id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count } = props;

  let registeredDate = new Date(registered_at).toDateString().substr(4);

  return (
    <section className='card'>
      <div className='card__content-header'>
        Customer {id}
      </div>
        
        <ul className='card__content'>
        <li className='customer__name'>
            {name}
          </li>
          <li>
            Account Credit: {account_credit}
          </li>
          <li>
            Movies Checked Out: {movies_checked_out_count}
          </li>

          <li className='customer__details'>
            {address}
          </li>
          <li className='customer__details'>
            {city} {state} {postal_code}
          </li>
          <li className='customer__details'>
            {phone}
          </li>

        </ul>
      <button className="btn btn-dark" onClick={() => { selectCustomerCallback(props.id) }}>Select Customer</button>
    </section>
  )

}

Customer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  registeredAt: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  accountCredit: PropTypes.number,
  moviesCheckedOutCount: PropTypes.number,

}

export default Customer;