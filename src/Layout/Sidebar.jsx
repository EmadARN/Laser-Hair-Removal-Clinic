import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Body from "./widgets/Body";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Bottom from "./widgets/Bottom";
import { MdExitToApp } from "react-icons/md";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import styles from "./Style";
import Icon from "react-multi-date-picker/components/icon";
import { Logo } from "@/widget/Logo";

const SideBarDashboard = ({ admintDatas, receptionDatas, active }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const [cookies, , removeCookie] = useCookies([
    "auth_Admin_token",
    "auth_Employee_token",
  ]);
  const router = useRouter();

  const handleLogout = () => {
    removeCookie("auth_Admin_token", { path: "/" });
    removeCookie("auth_Employee_token", { path: "/" });

    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <Box sx={styles.container}>
      <Sidebar collapsed={isCollapsed} width={isSmallScreen ? "110%" : "250px"}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <IoIosArrowBack /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "gray",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box color="#7563DC">
                  <Logo />
                </Box>
                <IconButton
                  sx={{}}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <IoIosArrowForward />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* {!isCollapsed && <Header textHead={textHead} />} */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Body
              selected={selected}
              setSelected={setSelected}
              admintDatas={admintDatas}
              receptionDatas={receptionDatas}
              isCollapsed={isCollapsed}
            />
          </Box>
          {!isCollapsed && <Bottom active={active} />}
          <Button sx={styles.logoutButton} onClick={handleLogout}>
            <Flex sx={styles.logoutFlex}>
              <Box sx={{ mr: { md: isCollapsed ? "14px" : "0px" } }}>
                <MdExitToApp />
              </Box>
              <Text
                sx={styles.logoutText}
                display={isCollapsed ? "none" : "flex"}
              >
                {isSmallScreen ? "خروج" : "خروج از حساب کاربری"}
              </Text>
            </Flex>
          </Button>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBarDashboard;
