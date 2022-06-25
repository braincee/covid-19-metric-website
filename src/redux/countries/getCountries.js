import CountriesAPINames from '../../components/Countries/countriesAPI';

const GET_COUNTRIES = 'GET_COUNTRIES';

const CountriesAction = (payload) => ({
  type: GET_COUNTRIES,
  payload,

});

const getCountries = (countriesNames) => async (dispatch) => {
  const countries = await CountriesAPINames(countriesNames);

  const objectCountries = [];
  countries.forEach((country) => {
    objectCountries.push({
      country: country.country,
      cases: country.cases,
      flag: country.countryInfo.flag,
    });
  });

  dispatch(CountriesAction(objectCountries));
};

export default getCountries;
