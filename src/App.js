import './App.css';

import { Nav } from './components/Nav';
import Searchbar from './components/Searchbar';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="App">
      <Nav />
      <Searchbar />
      <Weather />
    </div>
  );
}

export default App;
