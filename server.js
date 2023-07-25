const express = require("express");

const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.listen(PORT, ()=>console.log(`app is running on port ${PORT}`));

const data = require("./data/weather.json");

function filterByLat(lat) {
    const result = data.filter((city) => city.lat == lat);
    return result;
  }

function filterByLon(lon) {
    const result = data.filter((city) => city.lon == lon);
    return result;
  }

  function fitlerByCity(cityName) {
    const theCity = data.find((city) => city.city_name == cityName);
    return theCity;
  }



app.get("/", (request, response) => {
    response.json("Hello, City Explorer")
})

app.get("/weather", (request, response)=>{
    // console.log(request.query.city_name)
response.json("Whaaaat")
// let dataToReturn = data;


})