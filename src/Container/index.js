import { Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

const Layout = ({ children, bgColor }) => {
  return (
    <Box bgColor={"#F7F7F7"}>
      <NavBar bgColor={bgColor}/>
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
