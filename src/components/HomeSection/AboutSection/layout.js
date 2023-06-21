import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const AboutLayout = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#323338",
        width: "100%",
        // height: "100vh",
        padding: "0 3rem 3rem 3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
      }}
    >
      <Box
        sx={{
          width: { lg: "100%", md: "70%", sm: "100%", xs: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:{xs:"2rem", sm:"2rem"},
        }}
      >
        <Grid sx={{ paddingTop: "2rem"}}>
          <Typography
            sx={{
              color: "#078942",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Services
          </Typography>
        </Grid>
        <Grid>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
              fontWeight: "600",
              textAlign:"center"
            }}
          >
            What I am Great At
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
