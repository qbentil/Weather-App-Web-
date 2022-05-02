import './App.css';

import { Nav } from './components/Nav';
import Searchbar from './components/Searchbar';
import { Weather } from './components/Weather';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('Accra')
  const [data, setData] = useState({})
  const fetchData = async (loc) => {
    let url = "https://community-open-weather-map.p.rapidapi.com/weather"
    const options = {
        params: {
          q: loc,
          lang: 'null',
          units: 'imperial',
        },
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
      };
  
    try {
        let res = await axios.get(url, options)
        let data = await res.data
        setData(data);
        
    } catch (e) {
      console.log(e.response.data?.message);
      return;
    }
  }
  fetchData(location);
  return (
    <div className="App">
      <Nav />
      <Searchbar action={setLocation} />
      <Weather data = {data} />
    </div>
  );
}

export default App;
