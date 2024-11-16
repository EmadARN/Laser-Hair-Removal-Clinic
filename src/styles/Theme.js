import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      400: "#7563DC",
    },
    graySky: {
      100: "#F7FAFC",
    },
  },
  fonts: {
    body: "IRANYekan-Regular, sans-serif",
    heading: "IRANYekan-Medium, sans-serif",
    mono: "IRANYekan-Black, monospace",
  },
  styles: {
    global: {
      body: {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: "IRANYekan-Regular, sans-serif",
        "::-webkit-scrollbar": {
          width: "0.7em",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: " #9999",
          borderRadius: "50px",
        },
      },
      a: {
        textDecoration: "none",
      },
    },
  },
});

export default theme;
