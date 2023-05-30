import React from "react";
import { Box, Grid, Typography } from "@mui/material";
const ResumeSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "3rem",
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%", padding: "0 0 3rem 0" }}>
        <Grid>
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
            Resume
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ width: "100%", height: "100vh" }}>
        <iframe
          src="/cv.pdf"
          width="750"
          height="1000"
          type="application/pdf"
        />
      </Grid>
    </Box>
  );
};

export default ResumeSection;
