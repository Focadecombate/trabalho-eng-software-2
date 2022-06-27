import { ThemeOptions, createTheme } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#ffd23f",
    },
    secondary: {
      main: "#ff6663",
    },

    background: {
      default: "#000000",
    },
  },
};

export const theme = createTheme(themeOptions);
