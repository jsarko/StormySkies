import useWeatherApi from "./useWeatherApi";

const WeatherCard = () => {
  const { weatherData, loading, error } = useWeatherApi(60189);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(weatherData);
  return (
    <div>
      <p>Temp: {weatherData.temp}°</p>
      <p>Weather: {weatherData.weather.description}</p>
      <p>Humidity: {weatherData.rh}%</p>
    </div>
  );
};

export default WeatherCard;
