"use client";

import React, { useState } from "react";
import { Box, Typography, Grid, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import CardsTemplate from "./CardsTemplate/page";
import CardsTemplate2 from "./CardsTemplate2/page";
import ProjectData from "@/components/ProjectsData/projectItems";
import ProjectLayout from "./layout";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProjectSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { projectItems, projectItems2 } = ProjectData();

  return (
    <ProjectLayout>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "100", display: "flex", justifyContent: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            scrollButtons="auto"
            sx={{
              ".Mui-selected": {
                color: "#3BC117 !important",
                fontSize:"1.2em",
              },
            }}
          >
            <Tab
              label="Frontend Projects"
              {...a11yProps(0)}
              sx={{ color: "primary.mainText" }}
            />
            <Tab
              label="UX Projects"
              {...a11yProps(1)}
              sx={{ color: "primary.mainText" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
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
              {projectItems2.map((datas) => {
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
                    <CardsTemplate2
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
        </TabPanel>
      </Box>
    </ProjectLayout>
  );
};

export default ProjectSection;
