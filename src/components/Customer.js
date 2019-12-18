import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {
  const { selectCustomerCallback, id, name, registeredAt, address, city, state, postalCode, phone, accountCredit, moviesCheckedOutCount } = props;

  return (
    <section className='card'>
      <div className='card__content-header'>
          Customer {id}
        <ul className='card__content'>
          <li>
            {name}
          </li>
          <li>
            {registeredAt}
          </li>
          <li>
            {address} {city} {state} {postalCode}
          </li>
          <li>
            {phone}
          </li>
          <li>
            {accountCredit}
          </li>
          <li>
            {moviesCheckedOutCount}
          </li>

        </ul>
      </div>
      <button onClick={() => { selectCustomerCallback(props.id) }}>Select Customer</button>
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