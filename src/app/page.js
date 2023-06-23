"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/theme";
import './globals.css';
import HomeSection from "@/components/HomeSection/page";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <HomeSection/>
      </Box>

    </ThemeProvider>
  );
}
