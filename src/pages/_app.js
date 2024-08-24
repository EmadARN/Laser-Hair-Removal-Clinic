import { DashboardContextProvider } from "@/context/DashboardContext";
import { store } from "@/features/store";
import "@/styles/globals.css";
import theme from "@/styles/Theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DashboardContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </DashboardContextProvider>
    </Provider>
  );
}
