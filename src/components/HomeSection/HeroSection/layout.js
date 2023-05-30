import React from "react";
import { Box, Grid } from "@mui/material";
import Heropic from "../../../../public/bg-1.jpg";

const HeroLayout = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url("/bg-2.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `100%`,
        // height:"100vh",
        width:"100%",
        padding:"3rem"
      }}
    >
      {children}
    </Box>
  );
};

export default HeroLayout;
