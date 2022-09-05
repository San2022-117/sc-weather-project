import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Type a city..."
          className="city-search"
        />
        <input type="submit" value="Search" className="city-control" />
      </form>
      <h2>Display city</h2>
      <div className="row">
        <div className="col-3">
          <ul>
            <li>day</li>
            <li>date</li>
            <li>time</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather-icon"
              />
            </li>
            <li>weather description</li>
          </ul>
        </div>
        <div className="col-3">
          {" "}
          <ul>
            <li>temperature: 12°C</li>
            <li>precipitation: 20% rain</li>
            <li>humidity: 60%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
