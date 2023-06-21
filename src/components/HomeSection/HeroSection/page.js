import React, { useRef } from "react";
import { Box, Grid, Stack, Typography, TextField, Button } from "@mui/material";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import HeroLayout from "./layout";
import Image from "next/image";
import HeroPic from "../../../../public/my-hero-pic.png";

const HeroSection = () => {
  return (
    <HeroLayout>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: { lg: "0", md: "3rem", sm: "3rem", xs: "3rem" },
        }}
      >
        <Grid
          item
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: { sm: "2rem", xs: "3rem" },
            }}
          >
            <Grid sx={{ paddingBottom: "1rem" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: "600",
                }}
              >
                Oluwatobi
                <br /> Samuel <span style={{ color: "#078942" }}>.</span>
              </Typography>
            </Grid>
            <Grid sx={{ paddingBottom: "1rem" }}>
              <hr
                style={{
                  color: "#023E76",
                  width: "30px",
                  border: "2px solid #078942",
                }}
              />
            </Grid>
            <Grid sx={{ paddingBottom: "1rem" }}>
              <Typography>
                <span style={{ cursor: "pointer" }}>Github</span> |{" "}
                <span style={{ cursor: "pointer" }}>LinkedIn</span>{" "}
              </Typography>
            </Grid>
            <Grid>
              <Button
                sx={{
                  background: "#2C2D32",
                  color: "#078942",
                  fontWeight: "500",
                  border: "2px solid #078942",
                  borderRadius: "5px",
                  width: "150px",
                }}
              >
                Contact Me.
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={5}
            sx={{
              display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            }}
          >
            <Image src={HeroPic} alt="hero-pic" width="80%" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ paddingTop: { sm: "2rem", xs: "2rem" } }}
          >
            <Grid sx={{ paddingBottom: "1rem" }}>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "1em",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#078942",
                }}
              >
                Introduction
              </Typography>
            </Grid>
            <Grid sx={{ paddingBottom: "1rem" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: "600",
                }}
              >
                UI/UX Designer, <br />
                Frontend Developer
              </Typography>
            </Grid>
            <Grid sx={{ paddingBottom: "1rem" }}>
              <Typography
                sx={{
                  width: {lg:"100%", md:"100%", sm:"80%", xs:"100%"},
                  textAlign: "left",
                  color: "#fff",
                  fontSize: { lg: "1em", md: "1em", sm: "0.7em", xs: "0.7em" },
                  fontWeight: "400",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable.
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "flex-end" }}>
              <Button sx={{ color: "#078942" }}>Learn more</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </HeroLayout>
  );
};

export default HeroSection;
