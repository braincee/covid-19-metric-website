import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { continent } = useSelector((state) => state.continentReducer);

  return (
    <nav>
      {location.pathname === '/' && (
        <>
          <p>
            <b>World of Covid Cases</b>
          </p>
          <p>Continents COVID Cases</p>
        </>
      )}

      {location.pathname !== '/' && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} onClick={() => navigate(-1)} />
          <p>
            <b>{continent}</b>
          </p>
          <p>{`${continent} COVID Cases`}</p>
        </>
      )}

      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faCog} />
    </nav>
  );
}

export default Navbar;
