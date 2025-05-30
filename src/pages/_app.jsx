
import { wrapper } from "@/features/store";
import "@/styles/globals.css";
import theme from "@/styles/Theme";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
  
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>

  );
}
export default wrapper.withRedux(App);
