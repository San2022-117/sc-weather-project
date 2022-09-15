import React from "react";
import FormDay from "./FormDay";
import FormDate from "./FormDate";
import FormTime from "./FormTime";

export default function WeatherData(props) {
  return (
    <div className={WeatherData}>
      <h2>{props.data.city}</h2>
      <div className="row">
        <div className="col-3 first">
          <ul>
            <li>
              <FormDay day={props.data.day} />
            </li>
            <li>
              <FormDate date={props.data.day} />
            </li>
            <li>
              <FormTime time={props.data.day} />
            </li>
          </ul>
        </div>
        <div className="col-3 second">
          <ul>
            <li className="img">
              <img src={props.data.iconUrl} alt={props.data.description} />
            </li>
            <li className="description text-capitalize">
              {props.data.description}
            </li>
          </ul>
        </div>
        <div className="col-3 third">
          {" "}
          <ul>
            <li>
              temperature:{" "}
              <span className="celsius">
                {Math.round(props.data.temperature)}°C
              </span>{" "}
              | <span className="fahren">65°F</span>
            </li>
            <li>wind: {Math.round(props.data.wind)} m/s</li>
            <li>humidity: {Math.round(props.data.humidity)}%</li>
          </ul>
        </div>
        <div className="col-3 four">
          <div className="radar">radar view</div>
        </div>
      </div>
    </div>
  );
}
