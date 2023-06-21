import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ContactContainer = ({ icons, data, link }) => {
  return (
    <Box>
        <Link href={link} passHref>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#2C2D32",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
          padding: "1rem 1rem 1rem 2rem",
        }}
      >
        <Grid sx={{ marginRight: "1.5rem" }}>
          <Image src={icons} width={40} height={40} alt="contact-icons" />
        </Grid>
        <Grid>
          <Typography sx={{color:"#fff"}}>{data}</Typography>
        </Grid>
      </Box>
        </Link>
    </Box>
  );
};

export default ContactContainer;
