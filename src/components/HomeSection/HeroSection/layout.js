import React from "react";
import { Box, Grid } from "@mui/material";
import Heropic from "../../../../public/bg-1.jpg";

const HeroLayout = ({ children }) => {
  return (
    <Box
      sx={{
        background:"#2C2D32",
        height: "100vh",
        width: "100%",
        padding: { lg: "3rem 3rem 0 3rem", md: "3rem", sm: "2rem", xs: "1rem" },
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default HeroLayout;
