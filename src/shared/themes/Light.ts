import { createTheme } from "@mui/material";
import { deepPurple, grey, indigo, purple } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      dark: deepPurple[900],
      light: deepPurple[100],
      contrastText: "#ffffff",
    },
    secondary: {
      main: purple["A400"],
      dark: purple["A700"],
      light: purple["A100"],
      contrastText: "#ffffff",
    },
    background: {
      paper: indigo[50],
      default: grey[300],
    },
  },
});
