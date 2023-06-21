import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ContactLayout = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#323338",
        width: "100%",
        height: "100vh",
        padding: "0 3rem 0 3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { lg: "100%", md: "70%", sm: "100%", xs: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
            contact me
          </Typography>
        </Grid>
        <Grid>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2em",
              fontWeight: "600",
            }}
          >
            Ways To Contact Me
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

export default ContactLayout;
