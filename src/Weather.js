import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";

export default function Weather() {
  //const [ready, setReady] = useState(false); // here we have to use conditional rendering // at last, we move this as a value to the setWeatherData
  //let [temperature, setTemperature] = useState(null); //default value = (null) !!
  let [weatherData, setWeatherData] = useState({ ready: false }); // its default value is `false`
  function retrieveData(response) {
    console.log(response.data);
    //setTemperature(response.data.main.temp);
    setWeatherData({
      ready: true,
      day: new Date(response.data.dt * 1000),
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
    });
    //setReady(true); // having the say that the data are retrieved and that they can be returned because ready = true
  }
  if (weatherData.ready) {
    // = if weatherData is(.) ready, do the following...
    //using state to return data after they are processed, not in a loop
    return (
      <div className="Weather">
        <h1>The Weather Channel</h1>
        <form>
          <input
            type="search"
            placeholder="Type a city..."
            className="city-search"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="city-control" />
        </form>
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    // though ajax updating the data for the UI | only when we get the data response we can then show -> ready === true -> data displayed via setTemperature
    const apiKey = "ff099235c69da20db0648197324b0d72";
    let city = "Cape Town";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; //backticks!
    axios.get(apiUrl).then(retrieveData);

    return `The app is loading...`;
  }
}
