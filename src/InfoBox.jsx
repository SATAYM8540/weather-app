import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './infoBox.css';

export default function Info({ info }) {
  if (!info) return null;

  return (
    <div className="info-box">
      <Card className="forecast-card">
        <CardContent>
          <Typography variant="h5" gutterBottom>{info.city}</Typography>
          <div className="forecast-day">
            <p>Temperature: {info.temp}°C</p>
            <p>Min: {info.tempMin}°C | Max: {info.tempMax}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Feels like: {info.feelslike}°C</p>
            <p><i>{info.weather}</i></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}