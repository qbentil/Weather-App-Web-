import './App.css';

import Searchbar from './components/Searchbar';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Weather />
    </div>
  );
}

export default App;
