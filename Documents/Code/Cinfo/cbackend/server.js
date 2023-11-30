const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3001;

process.setMaxListeners(15);

app.use(cors()); 


app.use(express.json());

// Fetch information about all countries
app.get('/cbackend/countries', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch information about a specific country
app.get('/cbackend/countries/:name', async (req, res) => {
  const { name } = req.params;
  console.log('Fetching country information for:', name);

  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const country = response.data[0];
    console.log('Country information:', country);
    res.json(country);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
