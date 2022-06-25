import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const continents = useSelector((state) => state.continentsReducer);
  const [totalCases, setTotalCases] = useState(0);

  useEffect(() => {
    const totalNumber = continents?.reduce((prev, curr) => prev + curr.cases, 0);
    setTotalCases(totalNumber);
  }, [continents]);

  return (
    <header>
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/16/29/map-307442_960_720.png" alt="" />
        <div>
          <h2>Covid Cases Around the World</h2>
          <p>{totalCases}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
