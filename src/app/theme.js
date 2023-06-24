import { createTheme } from "@mui/material/styles";
// import {grey} from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2C2D32",
      mainText: "#3BC117",
    },
    secondary: {
      main: "#fff",
      contrastText: "#3BC117",
    },
    black: {
      main: "#2C2D32",
    },
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          // '&.Mui-disabled': {
          //     background: grey[100],
          // }
        },
      },
    },
    MuiTab: {
      root: {
        "&.Mui-selected": {
          "color": "#3BC117"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "#3BC117",
        },
      },
    },
  },

  typography: {
    fontFamily: "Poppins",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontFamily: "Poppins, sans-serif",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.75,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    subtitle3: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      lineHeight: 1.75,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    subtitle2lg: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.75,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.6,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 600,
      fontSize: "0.75rem",
      lineHeight: 2.46,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    button: {
      textTransform: "none",
      background: "#2C2D32",
    },
  },
});
