import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ContactContainer = ({ icons, data, link }) => {
  return (
    <Box sx={{ width: "100%" }}>
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
          <Grid
            item
            container
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: { sm: "center", xs: "center" },
              }}
            >
              <Image src={icons} width={40} height={40} alt="contact-icons" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                justifyContent: { sm: "center", xs: "center" },
              }}
            >
              <Typography
                sx={{ color: "#fff", fontSize: "1em", textAlign: "center" }}
              >
                {data}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Box>
  );
};

export default ContactContainer;
