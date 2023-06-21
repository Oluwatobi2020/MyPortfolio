import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ResumeLayout = ({ children }) => {
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
        alignItems: "center",
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
        <Grid>
          <Typography
            sx={{
              color: "#078942",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            resume
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
            A Summary Of My Achievements
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>{children}</Grid>
      </Box>
    </Box>
  );
};

export default ResumeLayout;
