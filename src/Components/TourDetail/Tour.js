import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import QuiltedImageList from "./ImageList";
import CustomizedAccordions from "./Accordion";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "./Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginY={4}>
        Explore The World
      </Typography>
      <Box sx={{ display: "flex" }}>
        <img
          src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <QuiltedImageList />
      </Box>

      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit
          totam facilis, similique eligendi itaque repellendus non accusamus
          incidunt commodi, fugiat nesciunt enim dolor quasi minima aperiam
          quibusdam voluptatem deleniti distinctio, quos temporibus!
          Dignissimos, nemo. Corporis ratione eveniet provident cumque odio qui
          commodi perferendis reiciendis magni, unde rem aliquam at natus nam
          quaerat similique suscipit neque vero, eum debitis rerum?
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginY={3}>
          Frequently ask Questions
        </Typography>
        <CustomizedAccordions />
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation> 
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
