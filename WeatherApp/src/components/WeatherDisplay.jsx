const WeatherDisplay = ({ weatherData, loading, error }) => {
  if (loading)
    return <p className="text-gray-500 text-lg">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-lg">{error}</p>;
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full text-center">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-600 capitalize mb-4">{weather[0].description}</p>
      <p className="text-5xl font-bold mb-4 text-gray-900">{main.temp}°C</p>
      <p className="text-gray-700">Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
