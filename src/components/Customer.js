import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {
  const { id, name, registeredAt, address, city, state, postalCode, phone, accountCredit, moviesCheckedOutCount } = props;

  return (
    <section className='card'>
      <div className='card__content'>

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
    </section>
  )

}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registeredAt: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  accountCredit: PropTypes.number.isRequired,
  moviesCheckedOutCount: PropTypes.number.isRequired

}

export default Customer;