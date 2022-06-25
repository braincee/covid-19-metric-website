import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContinentsImages from './ContinentImages';
import { getContinent } from '../../redux/continents/getContinents';

const ContinentDisplay = () => {
  const { continentName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinent(continentName));
  }, []);

  const { cases, continent } = useSelector((state) => state.continentReducer);

  return (
    <header>
      <div>
        <img
          src={ContinentsImages[continent]}
          alt=""
        />
        <div>
          <h2>{continent}</h2>
          <p>{cases}</p>
        </div>
      </div>
      <div>{`STATUS OF ${continent?.toUpperCase()}'S COUNTRIES`}</div>
    </header>
  );
};

export default ContinentDisplay;
