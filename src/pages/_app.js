import { DashboardContextProvider } from "@/context/DashboardContext";
import "@/styles/globals.css";
import theme from "@/styles/Theme";
import { ChakraProvider } from "@chakra-ui/react";
export default function App({ Component, pageProps }) {
  return (
    <DashboardContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DashboardContextProvider>
  );
}
