import React from "react";
import HeroSection from "./HeroSection/page";
import ProjectSection from "./ProjectsSection/page";
import AboutSection from "./AboutSection/page";
import ResumeSection from "./ResumeSection/page";
import { Box, Typography, Grid } from "@mui/material";

const HomeSection = () => {
  return (
    <Box>
      <Grid sx={{ padding: "0 0 2rem 0" }}>
        <HeroSection />
      </Grid>
      <Grid sx={{ padding: "0 0 2rem 0" }}>
        <AboutSection />
      </Grid>
      <Grid sx={{ padding: "0 0 2rem 0" }}>
        <ProjectSection />
      </Grid>
      <Grid sx={{ padding: "0 0 2rem 0" }}>
        <ResumeSection />
      </Grid>
    </Box>
  );
};

export default HomeSection;
