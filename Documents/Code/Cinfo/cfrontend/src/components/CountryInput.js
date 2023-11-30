// CountryInput.js
import React, { useState } from 'react';
import axios from 'axios';

const CountryInput = ({ onCountryInfoChange }) => {
  const [countryName, setCountryName] = useState('');

  const handleCountrySubmit = async (e) => {
    e.preventDefault();
    await fetchCountryInfo();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      e.preventDefault();
      fetchCountryInfo();
    }
  };

  const fetchCountryInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cbackend/countries/${countryName}`);
      onCountryInfoChange(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCountrySubmit}>
      <label>
        Enter Country Name:
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button type="submit">Fetch Info</button>
    </form>
  );
};

export default CountryInput;
