// ...existing code...
import  { useEffect, useState } from "react";

export default function Neweather() {
  const [query, setQuery] = useState("New York");
  const [input, setInput] = useState("");
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch coords for initial query
    fetchCoordinates(query);
  }, []);

  useEffect(() => {
    if (!coords) return;
    fetchWeather(coords.latitude, coords.longitude, coords.name);
  }, [coords]);

  async function fetchCoordinates(q) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          q
        )}&count=1`
      );
      const data = await res.json();
      if (data && data.results && data.results.length > 0) {
        const { latitude, longitude, name, country } = data.results[0];
        setCoords({
          latitude,
          longitude,
          name: `${name}${country ? ", " + country : ""}`,
        });
      } else {
        setError("Location not found.");
        setWeather(null);
        setCoords(null);
      }
    } catch {
      setError("Failed to lookup location.");
    } finally {
      setLoading(false);
    }
  }

  async function fetchWeather(lat, lon, locationName) {
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        setWeather({
          current: data.current_weather,
          daily: data.daily,
          location: locationName,
        });
      } else {
        setError("No weather data received.");
      }
    } catch {
      setError("Failed to fetch weather.");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setQuery(input.trim());
    fetchCoordinates(input.trim());
  }

  function useMyLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        // reverse geocode to get name
        try {
          const res = await fetch(
            `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&count=1`
          );
          const data = await res.json();
          const name =
            data && data.results && data.results[0]
              ? `${data.results[0].name}${
                  data.results[0].country ? ", " + data.results[0].country : ""
                }`
              : "Current location";
          setCoords({ latitude: lat, longitude: lon, name });
        } catch {
          setCoords({
            latitude: lat,
            longitude: lon,
            name: "Current location",
          });
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError("Unable to get your location.");
      }
    );
  }

  function weatherCodeToEmoji(code) {
    // small, non-exhaustive mapping for common codes
    if (code === 0) return "☀️";
    if (code === 1 || code === 2 || code === 3) return "⛅";
    if (code >= 45 && code <= 48) return "🌫️";
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "🌧️";
    if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return "🌨️";
    if (code >= 95) return "⛈️";
    return "🌤️";
  }

  return (
    <div className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mx-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search city (e.g. London)"
          className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
          Search
        </button>
        <button
          type="button"
          onClick={useMyLocation}
          className="px-3 py-2 bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200">
          My Location
        </button>
      </form>

      {loading && (
        <div className="text-center py-6">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-sky-400 border-t-transparent" />
        </div>
      )}

      {error && <div className="text-red-600 text-sm mb-3">{error}</div>}

      {!loading && weather && (
        <div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold">{weather.location}</div>
              <div className="text-sm text-slate-500">Current</div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">
                {Math.round(weather.current.temperature)}°C
              </div>
              <div className="text-sm text-slate-600">
                {weatherCodeToEmoji(weather.current.weathercode)} Wind{" "}
                {Math.round(weather.current.windspeed)} km/h
              </div>
            </div>
          </div>

          {weather.daily && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {weather.daily.time.slice(0, 3).map((date, i) => (
                <div
                  key={date}
                  className="bg-slate-50 p-3 rounded-lg text-center">
                  <div className="text-xs text-slate-500">{date}</div>
                  <div className="text-lg font-medium">
                    {Math.round(weather.daily.temperature_2m_max[i])}° /{" "}
                    {Math.round(weather.daily.temperature_2m_min[i])}°
                  </div>
                  <div className="text-sm mt-1">
                    {weatherCodeToEmoji(weather.daily.weathercode[i])}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!loading && !weather && !error && (
        <div className="text-slate-500 text-center py-6">
          Enter a city and press Search or use My Location.
        </div>
      )}
    </div>
  );
}
// ...existing code...
