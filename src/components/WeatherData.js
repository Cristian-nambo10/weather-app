import React from "react";

const WeatherData = (props) => {
  return (
    <div>
      <p>
        <strong>Description:</strong> {props.conditions}
      </p>
      <p>
        <strong>Time:</strong> {props.time}
      </p>
    </div>
  );
};

export default WeatherData;
