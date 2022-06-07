import React from "react";
import WeatherImage from "./WeatherImage";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <WeatherImage img={props.img} />
      <WeatherData conditions={props.conditions} time={props.time} />
      {/* <p className="conditions"><b>Conditions:</b> {props.conditions}</p>
      <p className="time"><b>Time: </b>{props.time}</p> */}
    </div>
  );
};

export default WeatherForecast;
