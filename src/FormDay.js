import React from "react";

export default function FormDay(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.day.getDay()];

  return <div>{day}</div>;
}
