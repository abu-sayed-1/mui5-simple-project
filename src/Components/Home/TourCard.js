import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },

        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 13,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={6} sm={3}>
      <Link to="/detail" style={{textDecoration: "none"}}>
        <ThemeProvider theme={theme}>
          <Paper elevation={10}>
            <img src={tour.image} alt="" className="img" />
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={1}>
                  {tour.duration} hours
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                marginTop={2}
              >
                <Rating
                  name="read-only"
                  value={tour.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={0.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  From C ${tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Link>
    </Grid>
  );
};

export default TourCard;
