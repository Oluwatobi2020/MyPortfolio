import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AboutLayout from "./layout";
import Image from "next/image";
import AboutCards from "./AboutCards/page";
import ProjectData from "@/components/ProjectsData/projectItems";

const AboutSection = () => {

  const {skillsList} = ProjectData();

  return (
    <AboutLayout>
      <Box
        sx={{
          padding: { lg: "3rem", md: "3rem", sm: "0", xs: "0" },
          width: "100%",
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
            width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {skillsList.map((skills) => {
            const {icon, id, name} = skills;
            return(
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AboutCards icon={icon} name={name}  />

          </Grid>

            )
          })}
        </Grid>
      </Box>
    </AboutLayout>
  );
};

export default AboutSection;
