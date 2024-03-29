import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ProjectLayout = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#2C2D32",
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
        <Grid sx={{paddingTop:"2rem"}}>
          <Typography
            sx={{
              color: "primary.mainText",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            portfolio
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
            My Masterpiece Collection
          </Typography>
        </Grid>
        {/* <Grid
          sx={{ width: "100%", display:"flex", justifyContent: "center", alignItems: "center" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1em",
              textAlign: "center",
              fontWeight:"300",
              width: "50%",
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Typography>
        </Grid> */}
      </Box>
      <Box
        sx={{
          width: "100%",
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectLayout;
