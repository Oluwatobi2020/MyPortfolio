import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CardsTemplate from "./CardsTemplate/page";
import ProjectData from "@/components/ProjectsData/projectItems";

const ProjectSection = () => {
  const { projectItems } = ProjectData();

  return (
    <Box sx={{ padding: "3rem" }}>
      <Grid container spacing={2} sx={{ width: "100%" }}>
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
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={5}
        sx={{ width: "100%", display: "flex", padding: "3rem" }}
      >
        {projectItems.map((datas) => {
          const { id, name, description, projectImage, links } = datas;
          return (
            <Grid item xs={12} sm={12} md={4} lg={3} key={id}>
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
