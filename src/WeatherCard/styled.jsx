import styled from "styled-components";
import styles from "../App.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 87vh;
  overflow: hidden;
`;

export const WeatherInfo = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.5em;
  font-family: "SpaceGrotesk";
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const WeatherDesc = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-size: 6em;
  font-family: "SpaceGrotesk";
`;
