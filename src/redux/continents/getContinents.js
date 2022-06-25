import { ContinentNameAPI, ContinentsAPI } from '../../components/Continents/continentsAPI';

const GET_CONTINENTS = 'GET_CONTINENTS';
const GET_CONTINENT = 'GET_CONTINENT';

const ContinentsAction = (payload) => ({
  type: GET_CONTINENTS,
  payload,
});

const ContinentAction = (payload) => ({
  type: GET_CONTINENT,
  payload,
});

export const getContinents = () => async (dispatch) => {
  const continents = await ContinentsAPI();
  const objectContinents = [];

  continents.forEach((continent) => {
    objectContinents.push({
      cases: continent.cases,
      continent: continent.continent,
      countries: continent.countries,
    });
  });

  dispatch(ContinentsAction(objectContinents));
};

export const getContinent = (continentName) => async (dispatch) => {
  const continent = await ContinentNameAPI(continentName);
  const objectContinent = {
    cases: continent.cases,
    continent: continent.continent,
    countries: continent.countries,
  };

  dispatch(ContinentAction(objectContinent));
};
