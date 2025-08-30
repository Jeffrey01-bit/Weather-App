import React from "react";
import "./Weather.css";
import searchIcon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="searchbar">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p>16°C</p>
      <p>London</p>
    </div>
  );
};

export default Weather;
