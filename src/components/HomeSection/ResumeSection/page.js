import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ResumeLayout from "./layout";
const ResumeSection = () => {
  return (
    <ResumeLayout>
      <Box
        sx={{
          width: "100%",
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="/cv.pdf"
            width="100%"
            height="500"
            type="application/pdf"
          />
        </Grid>
      </Box>
    </ResumeLayout>
  );
};

export default ResumeSection;
