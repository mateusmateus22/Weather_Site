// CurrentWeather.jsx
import React from 'react';

const CurrentWeather = ({ data }) => {
  const { main, weather, wind } = data;

  return (
    <div className="border p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Condições Atuais</h2>
      <div className="flex items-center mb-2">
        <img
          className="w-12 h-12 mr-2"
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="Weather Icon"
        />
        <span className="text-xl">{main.temp}°C</span>
      </div>
      <div>
        <p className="text-gray-600">{weather[0].description}</p>
        <p>Humidade: {main.humidity}%</p>
        <p>Vento: {wind.speed} m/s</p> 
      </div>
    </div>
  );
};

export default CurrentWeather;
