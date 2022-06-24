import { ContinentsAPI, ContinentNameAPI } from "../../components/Continents/ContinentsAPI";
import { continenstAction, continentAction } from "./reducerContinents";

export const applyContinents = () => async(dispatch) => {
    const continents = await ContinentsAPI();
    const newContinents = [];

    continents.forEach( ( continent ) =>
    {
        newContinents.push( {
            cases: continent.cases,
            continent: continent.continent,
            countries: continent.countries,
        })
    } )
    
    dispatch( continenstAction(newContinents));
}

export const applyContinent = (continentName) => async (dispatch) => {
  const continent = await ContinentNameAPI(continentName);
  const newContinent = {
    cases: continent.cases,
    continent: continent.continent,
    countries: continent.countries,
  };

  dispatch(continentAction(newContinent));
};