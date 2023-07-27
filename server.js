const express = require("express");

const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

const weatherData = require("./data/weather.json");

app.get("/", (request, response) => {
  response.json("Hello, City Explorer");
});

app.get("/weather", (request, response) => {
    const lat = request.query.lat;
    const lon = request.query.lon;

    const cityObject = weatherData.find((city)=>{
        return city.lon == lon && city.lat == lat;
     })
    
    //  const city = cityObject.city_name
     const day = cityObject.data.map((day)=>{
        return {
            description: `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}`,
            date: day.valid_date
        }
     })
   
  response.json(day);
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
