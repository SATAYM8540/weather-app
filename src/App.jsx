// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import SearchBox from './SearchBox';
// import Info from './InfoBox';
// function App() {
  

//   return (
//     <>
//    <SearchBox/>
//    <Info/>
//     </>
//   )
// }

// export default App



// import { useState } from 'react';
// import SearchBox from './SearchBox';
// import Info from './InfoBox';
// import "./App.css"

// function App() {
//   const [weatherInfo, setWeatherInfo] = useState(null);  // Holds weather data

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2>Weather App</h2>
//       <SearchBox updateInfo={setWeatherInfo} />
//       <Info info={weatherInfo} />
//     </div>
//   );
// }

// export default App;




import { useState } from 'react';
import SearchBox from './SearchBox';
import Info from './InfoBox';
import './App.css'; // new styles

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <div className="app-container">
      <h2>Weather App</h2>
      <SearchBox updateInfo={setWeatherInfo} />
      <Info info={weatherInfo} />
    </div>
  );
}

export default App;

