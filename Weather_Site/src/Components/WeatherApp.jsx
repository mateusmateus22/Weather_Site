// WeatherApp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';

const API_KEY = import.meta.env.VITE_API_KEY;

function normalizeString(str) {
  return str.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weatherCondition, setWeatherCondition] = useState(''); // novo estado para a condição climática

  const handleClick = async () => {
    setError('');
    setLoading(true);
    try {
      const normalizedCity = normalizeString(city);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${normalizedCity}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
      setWeatherCondition(response.data.weather[0].main.toLowerCase()); // define a condição climática com base na resposta
    } catch (error) {
      setError('Não foi possível encontrar a previsão do tempo para a cidade inserida.');
      setWeatherData(null);
      setWeatherCondition(''); // limpa a condição climática em caso de erro
    }
    setLoading(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // impede o comportamento padrão do formulário
    handleClick();
  };

  // Define a classe de fundo com base na condição climática
  let backgroundClass = '';
  if (weatherCondition.includes('clear')) {
    backgroundClass = 'bg-clear';
  } else if (weatherCondition.includes('clouds')) {
    backgroundClass = 'bg-cloudy';
  } else if (weatherCondition.includes('rain')) {
    backgroundClass = 'bg-rainy';
  } // Adicione mais condições conforme necessário

  return (
    <div className={`flex items-center justify-center min-h-screen ${backgroundClass}`}>
      <div className="container mx-auto p-4 text-center bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Previsão do Tempo</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-400 mb-3.5"
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ml-2"
            disabled={loading || !city.trim()}
          >
            {loading ? 'Carregando...' : 'Procurar'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weatherData && <CurrentWeather data={weatherData} />}
      </div>
    </div>
  );
};

export default WeatherApp;
