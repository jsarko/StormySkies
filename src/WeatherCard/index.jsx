import React from "react";
import useWeatherApi from "./useWeatherApi";
import VideoBackground from "../VideoBackground";
import { Container, WeatherInfo, WeatherContainer, WeatherDesc } from "./styled";
import TextField from "@mui/material/TextField";

const WeatherCard = () => {
  const [zipCode, setZipCode] = React.useState(null);
  const { weatherData, loading, error } = useWeatherApi(zipCode ? zipCode : 60189);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length === 5) {
      setZipCode(event.target.value);
    }
  };

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Container>
        <VideoBackground />
        <WeatherContainer>
          <WeatherDesc>{weatherData.weather.description}</WeatherDesc>
          <WeatherInfo>
            {weatherData.temp}° Farenheight | {weatherData.rh}% Humidity
          </WeatherInfo>
        </WeatherContainer>
        <TextField
          id="outlined-helperText"
          label="Zip code"
          defaultValue="60189"
          type="tel"
          onChange={handleInputChange}
          style={{ fontFamily: "SpaceGrotesk" }}
        />
        <label style={{ color: "lightgrey", paddingTop: "10px" }}>{weatherData.city_name}</label>
      </Container>
    </>
  );
};

export default WeatherCard;
