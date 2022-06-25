const GET_CONTINENTS = 'GET_CONTINENTS';
const GET_CONTINENT = 'GET_CONTINENT';

export const ContinentsAction = (payload) => ({
  type: GET_CONTINENTS,
  payload,
});

export const ContinentAction = (payload) => ({
  type: GET_CONTINENT,
  payload,
});

export const continentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return action.payload;
    default:
      return state;
  }
};

export const continentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTINENT:
      return action.payload;
    default:
      return state;
  }
};
