"use client";
import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MdMenu } from "react-icons/md";

export default function TemporaryDrawer() {
  const [position, setPosition] = React.useState(false);

  return (
    <div style={{padding:"1rem"}}>
      <React.Fragment>
        <IconButton
          sx={{
            color: "#000",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
          onClick={() => setPosition(true)}
          // disabled={isMediumScreen ? true : false}
        >
          {<MdMenu size={30}/>}
        </IconButton>
        <Drawer
          anchor="right"
          open={position}
          onClose={() => setPosition(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setPosition(true)}
            onKeyDown={() => setPosition(true)}
          >
            <List>
              {["About", "Projects", "Resume", "Contact"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
