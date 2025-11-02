import { useState } from "react";


// You need to get your own API key from https://openweathermap.org/api
const API_KEY = "9c16bddc5983e91feaac79ac40086c30";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      <div className="weather-app  text-white font-bold bg-blue-400">
        <h2 className="text-white font-bold bg-blue-400 text-center">
          Weather App
        </h2>
        <form
          onSubmit={fetchWeather}
          className="weather-form flex  m-8 justify-center items-center">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="weather-input"
          />
          <button
            type="submit"
            className="weather-btn text-white mr-6 font-bold bg-red-800 rounded-lg border-4">
            Get Weather
          </button>{" "}
        </form>
        {loading && <p>Loading...</p>}
        {error && <p className="weather-error">{error}</p>}
        {weather && (
          <div className="weather-result">
            <h3>
              {weather.name}, {weather.sys.country}
            </h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
        <div className="weather-note flex justify-center items-center font-thin">
          <small>Enter a city and click "Get Weather".</small>
        </div>
      </div>
    </>
  );
}
