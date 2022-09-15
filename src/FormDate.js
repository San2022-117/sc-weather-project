import React from "react";

export default function FormDay(props) {
  console.log(props.date);

  let date = props.date.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Ded",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  return (
    <div>
      {date} of {month}, {year}
    </div>
  );
}
