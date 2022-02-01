import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      marginTop={10}
    >
      <Box>
        <Typography variant="h4" component="h1">
          Oops Page Not Found ):
        </Typography>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button variant="outlined" color="secondary">
            Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PageNotFound;
