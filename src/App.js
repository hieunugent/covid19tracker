import { FormControl, MenuItem } from '@material-ui/core';
import Select from "@material-ui/core/Select";
import React, { useEffect, useState } from 'react';

import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  useEffect(()=>{
        // send a req to server and do sth with it
        const getCountriesData = async ()=> {
          await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response)=> response.json())
          .then((data)=> {
            const countries = data.map((country)=> ({
              name:country.country,
              value:country.countryInfo.iso2,
            }));


            setCountries(countries)
          });
        };


        getCountriesData();
  },[]);
  const onCountryChange = async (event)=> {
    const countryCode = event.target.value;
    console.log(countryCode);
   setCountry(countryCode)
  };

  return (
    <div className="app">
      <div>
        <div className="app__header">
          <h1>COVID-19 TRACKER </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
          <InfoBox title="Recover cases" cases={1234} total={100000} />
          <InfoBox title="Deaths" cases={11234} total={4000} />
        </div>

        {/* Table */}
        {/* Graph */}
        {/* Map */}
        <Map />
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default App;
