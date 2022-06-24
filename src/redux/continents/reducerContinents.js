import {}

const GET_CONTINENTS = 'GET_CONTINETS';
const GET_CONTINENT = 'GET_CONTINENT';

export const continenstAction = ( payload ) => ( {
    type: GET_CONTINENTS,
    payload
} );

export const continentAction = ( payload ) => ( {
    type: GET_CONTINENT,
    payload
} );

export const continentsReducer = ( state = [], action ) => {
    switch ( action.type )
    {
        case GET_CONTINENTS:
            return action.payload;
        default:
            return state;
    }
};

export const continentReducer = ( state = {}, action ) =>
{
    switch ( action.type )
    {
        case GET_CONTINENT:
            return action.payload;
        default:
            return state;
    }
};