import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";

const CardsTemplate = ({ title, description, projectImage, links }) => {
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
          background: "#2C2D32",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
        }}
      >
        <CardMedia
          sx={{ height: 100, width: 300 }}
          image={projectImage}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: "1.2em", fontWeight: "500", color: "#fff" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: "#fff", fontSize: "0.7em", fontWeight: "400" }}
          >
            {description}
          </Typography>
          <Link href={links} passHref>
            <Button
              size="small"
              sx={{
                fontSize: "0.8em",
                textTransform: "none",
                color: "#078942",
                paddingTop: "0.8rem",
              }}
            >
              View Project
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardsTemplate;
