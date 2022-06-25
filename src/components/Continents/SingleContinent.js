import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import ContinentsImages from './ContinentImages';

/* eslint-disable react/prop-types */
const SingleContinent = ({ continentData }) => {
  const navigate = useNavigate();
  const { cases, continent } = continentData;

  return (
    <button
      className="continent"
      onClick={() => {
        navigate(`/${continent}`);
      }}
      type="button"
    >
      <FontAwesomeIcon icon={faArrowCircleRight} className="icon" />

      <div className="container">
        <img
          src={ContinentsImages[continent]}
          alt="continent pic"
          className="img"
        />
        <div>
          <h3>{continent}</h3>
          <p>{`Cases : ${cases}`}</p>
        </div>
      </div>
    </button>
  );
};

SingleContinent.protoTypes = {
  continentData: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    continent: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleContinent;
