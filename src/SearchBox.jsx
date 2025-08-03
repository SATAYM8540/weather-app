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

      if (!data || data.cod !== 200) throw new Error("City not found");

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
      <br />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
}