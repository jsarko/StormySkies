import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import WeatherCard from "./WeatherCard";
import styles from "./App.css";

function Copyright() {
  return (
    <Typography style={{ margin: "0 auto" }} variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://joesarko.com/">
        Joe Sarko
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography
            style={{
              color: "white",
              position: "absolute",
              left: 0,
              top: 0,
              padding: "20px",
              fontFamily: "Pacifico",
            }}
            variant="h4"
            component="h1"
            gutterBottom
          >
            StormySkies ⛈️
          </Typography>

          <WeatherCard />
        </Box>
      </Container>
      <Copyright style={{ display: "flex", flexDirection: "column" }} />
    </>
  );
}
