import { DashboardContextProvider } from "@/context/DashboardContext";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
export default function App({ Component, pageProps }) {
  return (
    <DashboardContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DashboardContextProvider>
  );
}
