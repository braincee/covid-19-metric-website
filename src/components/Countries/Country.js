import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Country = ({ countryDate }) => {
  const { country, cases, flag } = countryDate;

  return (
    <div>
      <img src={flag} alt={`${country}'s Img`} />
      <p>{country}</p>
      <p>{cases}</p>
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </div>
  );
};

Country.propTypes = {
  countryDate: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Country;
