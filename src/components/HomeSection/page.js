import React from "react";
import HeroSection from "./HeroSection/page";
import ProjectSection from "./ProjectsSection/page";
import AboutSection from "./AboutSection/page";
import ResumeSection from "./ResumeSection/page";
import ContactSection from "./ContactSection/page";
import { Box} from "@mui/material";

const HomeSection = () => {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ResumeSection />
      <ContactSection/>
    </Box>
  );
};

export default HomeSection;
