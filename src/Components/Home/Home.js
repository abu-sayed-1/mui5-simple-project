import React, { Fragment } from "react";
import cities from "../data.json";
import TourCard from "./TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city, index) => (
          <Fragment key={index}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard key={index} tour={tour} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Container>
    </div>
  );
};

export default Home;
