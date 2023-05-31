import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AboutLayout from "./layout";
import Image from "next/image";
const AboutSection = () => {
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
            width: "100%",
            justifyContent: "center",
            paddingBottom: "3rem",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src="/pic-2.png" alt="my-pic" width={200} height={200} />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            width: { lg: "50%", md: "70%", sm: "100%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(138.76deg, rgba(84, 108, 154, 0.26) -4.59%, rgba(84, 108, 154, 0.7) 115.7%)",
              padding: { lg: "3rem", md: "3rem", sm: "3rem", xs: "0 1rem 0 0" },
              boxShadow: "0px 4px 50px 22px rgba(0, 0, 0, 0.14)",
              borderRadius: "10px",
            }}
          >
            <Grid
              sx={{
                width: "80%",
                padding: "0 0 1rem 0",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#EEEDED",
                  padding: "2rem 0 0 0",
                  fontSize: { lg: "1em", md: "1em", sm: "1em", xs: "0.7em" },
                }}
              >
                I'm a BSc. degree holder from the University of Ibadan, Ibadan,
                Nigeria and have over three years experience as a front end
                developer and UX Designer. I have excellent knowledge of HTML,
                CSS, SCSS, AntD, Bootstrap, MUI, Javascript, Typescript
                React.js, Next.js and great problem solving skills coupled with
                impressive adaptive skills to work successfully and efficiently
                in a team.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </AboutLayout>
  );
};

export default AboutSection;
