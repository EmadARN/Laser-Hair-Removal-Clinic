import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      400: "#7563DC",
    },
  },
  styles: {
    global: {
      body: {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        "::-webkit-scrollbar": {
          width: "0.7em",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: " #999",
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
