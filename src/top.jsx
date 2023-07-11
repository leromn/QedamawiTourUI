import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffa500"
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f"
    }
  }
});
export default function Top() {
  return (
    <ThemeProvider theme={theme}>
      <div className="top">
        <h3>Qedamawi</h3>
        <Divider />
        <h1>Discover the beauty of Ethiopia</h1>
        <p>
          Embark on a journey with qedamawi, your trusted tour guide, and
          immerse yourself in the rich culture and stunning landscapes of
          Ethiopia.
        </p>
        <Button variant="outlined">Explore now</Button>
      </div>
    </ThemeProvider>
  );
}
