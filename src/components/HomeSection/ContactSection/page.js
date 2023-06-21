import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ContactLayout from "./layout";
import ContactContainer from "./ContactContainer/page";
import ProjectData from "@/components/ProjectsData/projectItems";

const ContactSection = () => {
  const { contactsList } = ProjectData();
  return (
    <ContactLayout>
      <Box
        sx={{
          padding: "3rem",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {contactsList.map((contacts) => {
            const { id, icon, type, link } = contacts;
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={id}>
                <ContactContainer icons={icon} data={type} link={link} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ContactLayout>
  );
};

export default ContactSection;
