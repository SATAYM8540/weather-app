import { useState } from 'react';
import SearchBox from './SearchBox';
import Info from './InfoBox';
import './App.css';

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <h2>Weather App</h2>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <SearchBox updateInfo={setWeatherInfo} />
      {weatherInfo && <Info info={weatherInfo} />}
    </div>
  );
}

export default App;