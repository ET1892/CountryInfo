import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countryName, setCountryName] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountryInfo = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3001/cbackend/countries/${countryName}`);
      console.log('Response from the backend:', response.data);
      setCountryInfo(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching country information:', error);
      console.log('Response data:', error.response?.data);
      setError(`Error fetching country information: ${error.message}`);
      
      
    } finally {
      setLoading(false);
    }
  };
  
  
  
  

  return (



<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', fontSize: '24px' }}>
    <h1>Country Info App Emilyah</h1>
    <img src="logo192.png" alt="Logo" width="100" height="100" style={{ marginLeft: '1px' }} />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '10px' }}>
    <label>Enter Country Name:</label>
    <input
      type="text"
      value={countryName}
      onChange={(e) => setCountryName(e.target.value)}
      style={{ borderRadius: '5px', margin: '5px', padding: '5px', marginBottom: '0px' }} 
    />
    <button onClick={fetchCountryInfo} style={{ borderRadius: '5px', padding: '5px', margin: '5px' }}>Fetch</button>
  </div>
  {loading && <p><strong>Loading...</strong></p>}
  {error && <p style={{ color: 'red' }}><strong>{error}</strong></p>}
  {countryInfo && (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', margin: '5px' }}>
        <p style={{ fontSize: '50px', margin: '0', marginBottom: '24px' }}><strong>{countryInfo.name.common}</strong></p>
        <img src={countryInfo.flags.svg} alt={`${countryInfo.name.common} Flag`} width="75" height="45" style={{ marginLeft: '10px',marginBottom: '24px' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: '10px', textAlign: 'left' }}>
        <p>Capital:</p>
        <p><strong>{countryInfo.capital[0]}</strong></p>

        <p>Population:</p>
        <p><strong>{countryInfo.population}</strong></p>

        <p>Region:</p>
        <p><strong>{countryInfo.region}</strong></p>

        <p>Subregion:</p>
        <p><strong>{countryInfo.subregion}</strong></p>
        
        <p>Languages:</p>
        <p><strong>{Object.values(countryInfo.languages).join(', ')}</strong></p>

        <p>Currency:</p>
        <p><strong>{Object.values(countryInfo.currencies).map((cur) => `${cur.name} (${cur.symbol})`).join(', ')}</strong></p>

        <p>Area:</p>
        <p><strong>{countryInfo.area} square kilometers</strong></p>

        <p>Timezones:</p>
        <p><strong>{countryInfo.timezones.join(', ')}</strong></p>
      </div>
    </div>
  )}
</div>













  );
}

export default App;
