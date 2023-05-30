import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import HeroLayout from "./layout";

const HeroSection = () => {
  return (
    <HeroLayout>
      <Box sx={{ padding: "2rem", width: "100%" }}>
        <Grid
          container
          spacing={2}
          sx={{ padding: "3rem 0 3rem 0", width: "100%" }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: "5em",
                md: "3.5em",
                sm: "2.5em",
                xs: "1.5em",
                width: { lg: "0", md: "0%", sm: "0%", xs: "100%" },
              },
              color: "#424956",
            }}
          >
            Hello! <br />
            My name is{" "}
            <span style={{ color: "#2B4679" }}>Oluwatobi Ojedeji</span>
            <br />A talented UX-Designer
            <br /> and Frontend developer.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center", padding: "1rem 0 0 0" }}
        >
          <Grid items sx={{ marginRight: "3rem" }}>
            <Link href="/github" passHref>
              <FaGithub size={25} />
            </Link>
          </Grid>
          <Grid items sx={{ marginRight: "3rem" }}>
            <Link href="/linkedIn" passHref>
              <FaLinkedinIn size={25} color="#1e2694" />
            </Link>
          </Grid>
          <Grid items>
            <Link href="/twitter" passHref>
              <FaTwitter size={25} color="#138dbc" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </HeroLayout>
  );
};

export default HeroSection;
