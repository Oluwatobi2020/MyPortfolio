import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CardsTemplate from "./CardsTemplate/page";
import ProjectData from "@/components/ProjectsData/projectItems";
import ProjectLayout from "./layout";

const ProjectSection = () => {
  const { projectItems } = ProjectData();

  return (
    <ProjectLayout>
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
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {projectItems.map((datas) => {
            const { id, name, description, projectImage, links } = datas;
            return (
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
    </ProjectLayout>
  );
};

export default ProjectSection;
