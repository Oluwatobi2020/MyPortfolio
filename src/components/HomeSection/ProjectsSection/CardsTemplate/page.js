import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";

const CardsTemplate = ({ title, description, projectImage, links }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={projectImage} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={links} passHref>
        <Button size="small">View Project</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardsTemplate;
