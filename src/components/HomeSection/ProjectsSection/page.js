import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CardsTemplate from "./CardsTemplate/page";
import ProjectData from "@/components/ProjectsData/projectItems";

const ProjectSection = () => {
  const { projectItems } = ProjectData();

  return (
    <Box sx={{ padding: { lg: "3rem", md: "3rem", sm: "3rem", xs: "0" } }}>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid
          sx={{ paddingLeft: { lg: "0", md: "0", sm: "3rem", xs: "3rem" } }}
        >
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
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          display: "flex",
          padding: { lg: "3rem", md: "3rem", sm: "3rem", xs: "2rem" },
        }}
      >
        {projectItems.map((datas) => {
          const { id, name, description, projectImage, links } = datas;
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <CardsTemplate
                title={name}
                description={description}
                projectImage={projectImage}
                links={links}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectSection;
