"use client";

import React from "react";
import NavBar from "../components/NavBar/page";


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
