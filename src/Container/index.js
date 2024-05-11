import { Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <Box bgColor={"#F7F7F7"}>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
