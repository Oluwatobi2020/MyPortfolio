import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const AboutLayout = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#E1EBFF",
        width: "100%",
        height: "90vh",
        padding: "3rem",
        justifyContent:"center",
      }}
    >
      <Box sx={{ width: "100%"}}>
        <Grid container spacing={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.5em",
              fontWeight: "700",
              color: "#424956",
              textDecoration: "underline",
              textDecorationColor: "#1D2A53",
            }}
          >
            About me
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutLayout;
