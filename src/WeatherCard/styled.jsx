import styled from "styled-components";
import styles from "../App.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  overflow: hidden;
`;

export const WeatherInfo = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-size: 2em;
  line-height: 20px;
  font-family: "SpaceGrotesk";
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
