import React, { useState } from "react";
import "./weather.css";

import clear_icon from "../Images/clear.png";
import cloud_icon from "../Images/cloud.png";
import drizzle_icon from "../Images/drizzle.png";
import humidity_icon from "../Images/humidity.png";
import rain_icon from "../Images/rain.png";
import search_icon from "../Images/search.png";
import snow_icon from "../Images/snow.png";
import wind_icon from "../Images/wind.png";

const Weather = () => {
  const [wicon, setwicon] = useState('');
  
  const search = async() => {
    const element = document.getElementsByClassName('cityInput');
    if (element[0].value == "") {
      return 0;
    }
    const url = `https://open-weather13.p.rapidapi.com/city/${element[0].value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4df3103639msh04eb8e640de7fe1p11d06cjsn89d6a26d2d1b',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


	const response =  await fetch(url, options);
	const data =  await response.json();
	console.log(data);

    

    let humidity =document.getElementsByClassName("humidity_percent");
    let wind = document.getElementsByClassName("wind_speed");
    let temp = document.getElementsByClassName("weather_temp");
    let location = document.getElementsByClassName("weather_location");
    let feel = document.getElementsByClassName("weather_feel");

    humidity[0].innerHTML = data.main.humidity + "%";
    temp[0].innerHTML = Math.floor((data.main.temp-32)*5/9) + "°C";
    wind[0].innerHTML = data.wind.speed + "km/hr";
    feel[0].innerHTML = "Feels Like" + Math.floor((data.main.feels_like-32)*5/9) + "°C";
    location[0].innerHTML = data.name;

    if (
      data.weather[0].icon == "01d.png" ||
      data.weather[0].icon == "01n.png"
    ) {
      setwicon(clear_icon);
    } else if (
      data.weather[0].icon == "02d.png" ||
      data.weather[0].icon == "02n.png"
    ) {
      setwicon(cloud_icon_icon);
    } else if (
      data.weather[0].icon == "03d.png" ||
      data.weather[0].icon == "03n.png"
    ) {
      setwicon(drizzle_icon);
    } else if (
      data.weather[0].icon == "04d.png" ||
      data.weather[0].icon == "04n.png"
    ) {
      setwicon(drizzle_icon);
    } else if (
      data.weather[0].icon == "09d.png" ||
      data.weather[0].icon == "09n.png"
    ) {
      setwicon(rain_icon);
    } else if (
      data.weather[0].icon == "10d.png" ||
      data.weather[0].icon == "10n.png"
    ) {
      setwicon(rain_icon);
    } else if (
      data.weather[0].icon == "13d.png" ||
      data.weather[0].icon == "13n.png"
    ) {
      setwicon(snow_icon);
    } else {
      setwicon(clear_icon);
      


    }
  };

  return (
    <div className="container">
      <div className="top">
        <input type="search" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather_img">
        <img src={wicon} alt="" />
      </div>
      <div className="weather_temp"></div>
      <div className="weather_location"></div>
      <div className="weather_feel"></div>

      <div className="data_container">
        <div className="element">
          <img src={humidity_icon} alt="" />
          <div className="data">
            <div className="humidity_percent"></div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" />
          <div className="data">
            <div className="wind_speed"></div>
            <div className="text">Wind</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
