// CountryInfo.js
import React from 'react';

const CountryInfo = ({ country }) => {
  if (!country || !country.name || !country.capital || !country.population) {
    return <p>No information available for this country.</p>;
  }

  console.log('Country Data:', country);


}
export default CountryInfo;
