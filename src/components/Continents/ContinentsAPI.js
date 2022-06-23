export const ContinentsAPI = () => {
    const result = await fetch('https://corona.lmao.ninja/v2/continents')
        .then( ( response ) => response.json() );

    return result;
};

export const ContinentNameAPI = (ContinentName) =>
{
    const result = await fetch( `https://corona.lmao.ninja/v2/continents/${ContinentName}`)
        .then((data) => data.json());
    
    return result;
    
};