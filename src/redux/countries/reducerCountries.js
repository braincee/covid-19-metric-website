const GET_COUNTRIES = 'GET_COUNTRIES';

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
