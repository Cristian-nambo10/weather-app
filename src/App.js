import React from "react";
import "./styles.css";
import weatherArr from "./data";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  const forecast = weatherArr.map((ele, index) => {
    return (
      <WeatherForecast
        // img={ele.img}
        // conditions={ele.conditions}
        // time={ele.time}
        {...ele} // Reformat
        key={index}
      />
    );
  });
  console.log(forecast);

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="forecast">{forecast}</section>
    </div>
  );
}
