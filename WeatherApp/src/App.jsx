import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    setWeatherData(null);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    // Automatically append ',NP' if no country code included
    const cityWithCountry = city.includes(",") ? city : `${city},NP`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cityWithCountry
    )}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800 font-sans px-4 py-8">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} loading={loading} error={error} />
      <Footer />
    </div>
  );
};

export default App;
