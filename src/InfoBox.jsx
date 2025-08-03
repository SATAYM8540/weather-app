// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import "./infoBox.css"
// export default function Info({info}){
//     const INIT_URL = "https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
 
//     return(
//         <div className="InfoBox">
//             <div className='cardContainer'>
//               <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image={INIT_URL}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city}
//         </Typography>
//         <Typography variant="body2" color= 'text.secondary' component = {"span"} >
//             <p>city = {info.city}</p>
//         <p>Temperature = {info.temp}&deg;C</p>
//         <p>Humidity = {info.humidity}</p>
//         <p>Min Temp = {info.tempMin}&deg;C</p>
//         <p>Max Temp = {info.tempMax}&deg;C</p>
//         <p>The weathercan be described as <i> {info.weather} </i>and feels like {info.frrlslike}&deg;C</p>
//         </Typography>
//       </CardContent>
      
//     </Card>
//     </div>
//         </div>
//     )
// }



// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import "./infoBox.css";

// export default function Info({ info }) {
//   const INIT_URL =
//     "https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

//   if (!info) {
//     return (
//       <div className="InfoBox">
//         <p>Search for a city to see weather info.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="InfoBox">
//       <div className="cardContainer">
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             alt="weather image"
//             height="140"
//             image={INIT_URL}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {info.city}
//             </Typography>
//             <Typography variant="body2" color="text.secondary" component="span">
//               <p>City: {info.city}</p>
//               <p>Temperature: {info.temp}&deg;C</p>
//               <p>Humidity: {info.humidity}%</p>
//               <p>Min Temp: {info.tempMin}&deg;C</p>
//               <p>Max Temp: {info.tempMax}&deg;C</p>
//               <p>
//                 Weather: <i>{info.weather}</i><br />
//                 Feels Like: {info.feelslike}&deg;C
//               </p>
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function Info({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=1000&auto=format&fit=crop&q=60";

  if (!info) {
    return <p style={{ textAlign: "center" }}>Search a city to see weather</p>;
  }

  return (
    <div className="info-box">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={INIT_URL} alt="Weather" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Temp: {info.temp}°C</p>
            <p>Min: {info.tempMin}°C / Max: {info.tempMax}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Feels Like: {info.feelslike}°C</p>
            <p>Condition: <i>{info.weather}</i></p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
