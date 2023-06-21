import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const AboutCards = ({ name, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0 0.5rem 0",
      }}
    >
      <Card
        sx={{
          width: "250px",
          height: "250px",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:"#2C2D32",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
        }}
      >
        <CardMedia sx={{ height: 100, width: 100 }} image={icon} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"#fff"}}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutCards;
