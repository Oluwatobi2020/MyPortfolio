import React, { useRef } from "react";
import { Box, Grid, Stack, Typography, TextField, Button } from "@mui/material";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import HeroLayout from "./layout";
import Image from "next/image";
import PrivatePic from "../../../assets/pic-2.png";
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
        }}
      >
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Grid sx={{ paddingBottom: "1rem" }}>
            <Typography
              sx={{ color: "#fff", fontSize: "2em", fontWeight: "600" }}
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
        </Box>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
        >
          <Image src={HeroPic} alt="hero-pic" width="50%" />
        </Box>
        <Box sx={{ textAlign: "left", width: "70%", marginLeft: "2rem" }}>
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
              sx={{ color: "#fff", fontSize: "2em", fontWeight: "600" }}
            >
              UI/UX Designer, <br />
              Frontend Developer
            </Typography>
          </Grid>
          <Grid sx={{ paddingBottom: "1rem" }}>
            <Typography
              sx={{ width: "100%", textAlign: "left", color: "#fff" }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Typography>
          </Grid>
          <Grid sx={{display:"flex", alignItems:"flex-end"}}>
            <Button sx={{ color: "#078942" }}>Learn more</Button>
          </Grid>
        </Box>
      </Box>
    </HeroLayout>
  );
};

export default HeroSection;
