import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input
          type="search"
          placeholder="Type a city..."
          className="city-search"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="city-control" />
      </form>
    </div>
  );
}
