// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";
// import { useState } from 'react';

// export default function SearchBox() {
    
//     let [city, setCity] = useState("");
//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "67781111a04e68dbe7043f7d8973d5d3";

//     let getWeatherInfo = async () => {
//       let response=  await fetch(`${API_URL}?q=${city }&appid=${API_KEY}&units=metric`)  ;
//     let jsonResponse=  await response.json();
//     // console.log(jsonResponse);
//     // object for result
//     let result = {
//         city: city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//     };
//     console.log(result);
//     };


//     let handleChange = (evt) => {
//         setCity(evt.target.value)
//     };

//     let handleSubmit = (evt)=> {
//         evt.preventDefault();
//         console.log(city);
//         setCity("");
//         getWeatherInfo();
//     };
//     return (
//         <div className='SearchBox1'>
//             <form onSubmit={handleSubmit}>
//                 <TextField id="city" label="City Name" variant="outlined"required value={city}
//                 onChange={handleChange}/>
//                 <br></br>
//                 <br></br>
//                   <Button variant="contained" type='submit'>
//         Search
//       </Button>
//             </form>
//         </div>
//     );
// }




// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";
// import { useState } from 'react';

// export default function SearchBox({ updateInfo }) {
//   const [city, setCity] = useState("");
//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "67781111a04e68dbe7043f7d8973d5d3"; // ✅ Replace with your own key for production

//   const getWeatherInfo = async () => {
//     try {
//       const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       if (!res.ok) throw new Error("City not found");

//       const data = await res.json();

//       const result = {
//         city: data.name,
//         temp: data.main.temp,
//         tempMin: data.main.temp_min,
//         tempMax: data.main.temp_max,
//         humidity: data.main.humidity,
//         feelslike: data.main.feels_like,
//         weather: data.weather[0].description
//       };

//       updateInfo(result);
//     } catch (err) {
//       alert("Error: " + err.message);
//       updateInfo(null);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getWeatherInfo();
//     setCity("");
//   };

//   return (
//     <div className='SearchBox1'>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <Button variant="contained" type="submit" style={{ marginLeft: "1rem" }}>
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// }

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "67781111a04e68dbe7043f7d8973d5d3";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    try {
      const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();

      const info = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelslike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      updateInfo(info);
    } catch (err) {
      alert("City not found");
      updateInfo(null);
    }

    setCity("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br></br>
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
}

