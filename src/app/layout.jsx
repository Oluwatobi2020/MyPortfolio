"use client";

import React from "react";
import SideBar from "../components/Sidebar/page";
import NavBar from "../components/NavBar/page";
import { Box } from "@mui/material";

export const metadata = {
  title: "tobiloba",
  description: "A portfolio of Oluwatobi Samuel",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body style={{width:"100%"}}>
      <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
