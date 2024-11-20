import { Box } from "@chakra-ui/react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const Layout = ({ children, bgColor }) => {
  return (
    <Box bgColor={"#F7F7F7"}>
      <NavBar bgColor={bgColor} />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
