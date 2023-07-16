import { useState, useEffect } from "react";

const useWeatherApi = (zipCode) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl =
    "https://api.weatherbit.io/v2.0/current" +
    `?postal_code=${zipCode}&country=US&key=${apiKey}&units=I`;

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        // Extract data object directly from response
        //   * Remove if access to count, minutely and alerts is needed in future.
        const { data } = await response.json();
        // Assume first list object is correct
        setWeatherData(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { weatherData, loading, error };
};

export default useWeatherApi;
