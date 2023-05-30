"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";

const NavBar = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(128.85deg, #7A99D6 2.46%, rgba(157, 184, 237, 0.86) 54%, rgba(179, 204, 252, 0) 118.56%)",
        }}
      >
        <Toolbar>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Link href="/" passHref>
                <Typography sx={{ color: "#fff", fontSize: "0.8em" }}>
                  Oluwatobi.
                </Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                padding: "",
              }}
            >
              <Grid>
                <Link href="/about" passHref>
                  <Typography sx={{ color: "#fff", fontSize: "0.8em" }}>
                    About
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link href="/my-projects" passHref>
                  <Typography sx={{ color: "#fff", fontSize: "0.8em" }}>
                    Projects
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link href="/my-resume" passHref>
                  <Typography sx={{ color: "#fff", fontSize: "0.8em" }}>
                    Resume
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default NavBar;