import React from "react";
import "./Weather.css";
import Form from "./Form";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>The Weather Channel</h1>
      <Form />
      <h2>Boston</h2>
      <div className="row">
        <div className="col-3 first">
          <ul>
            <li>Monday</li>
            <li>22/05/2022</li>
            <li>11:30 am</li>
          </ul>
        </div>
        <div className="col-3 second">
          <ul>
            <li className="img">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather-icon"
              />
            </li>
            <li className="description">sunny</li>
          </ul>
        </div>
        <div className="col-3 third">
          {" "}
          <ul>
            <li>
              temperature: <span className="celsius">12°C</span> |{" "}
              <span classNamee="fahren">65°F</span>
            </li>
            <li>precipitation: 20% rain</li>
            <li>humidity: 60%</li>
          </ul>
        </div>
        <div className="col-3 four">
          <div className="radar">radar view</div>
        </div>
      </div>
    </div>
  );
}
