const countriesAPINames = (countriesNames) =>
{
    const result = await fetch( `https://corona.lmao.ninja/v2/countries/${countriesNames}`)
        .then( ( data ) => data.json() );
    return result;
    
}

export default countriesAPINames;