import './App.css';

import { Nav } from './components/Nav';
import Searchbar from './components/Searchbar';
import { Weather } from './components/Weather';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('Accra')

  return (
    <div className="App">
      <Nav />
      <Searchbar action={setLocation} />
      <Weather location = {location} />
    </div>
  );
}

export default App;
