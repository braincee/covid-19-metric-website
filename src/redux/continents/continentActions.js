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
