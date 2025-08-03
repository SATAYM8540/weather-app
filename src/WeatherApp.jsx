// import SearchBox from "./SearchBox";
// import Info from "./InfoBox";
// import { useState } from "react";
// export default function WetherApp(){
//     const [weatherInfo, setWeatherInfo] = useState({
//     city: "Delhi",
//     frrlslike:35.51,
//     temp: 30.4,
//     tempMin:30.4,
//     tempMax: 30.4,
//     humidity: 68,
//     weather:"overcast clouds",
//     });
//     return (
//         <div style={{textAlign: "center"}}>
//             <h2>Weather App</h2>
//             <SearchBox/>
        
//             <InfoBox info = {weatherInfo}/>
//         </div>
//     )
// }




import SearchBox from "./SearchBox";
import Info from "./InfoBox";
import { useState } from "react";

export default function WetherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={setWeatherInfo} />
      <Info info={weatherInfo} />
    </div>
  );
}
