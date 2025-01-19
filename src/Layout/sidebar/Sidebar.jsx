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
import { Logo } from "@/widget/Logo";
import CustomModal from "@/Common/attentionModal/CustomModal";
import styles from "../Style";

const SideBarDashboard = ({ admintDatas, receptionDatas, active }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const [cookies, , removeCookie] = useCookies([
    "auth_Admin_token",
    "auth_Employee_token",
  ]);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false); // مدیریت وضعیت باز یا بسته بودن مدال

  const handleLogout = () => {
    removeCookie("auth_Admin_token", { path: "/" });
    removeCookie("auth_Employee_token", { path: "/" });
    router.push("/panel");
    setIsModalOpen(false); // بستن مدال بعد از خروج
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false); // بستن مدال بدون انجام هیچ کاری
  };
  const logoutRout = router.pathname.startsWith("/adminDashboard");

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
                  sx={{ w: "10px", h: "30px" }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <IoIosArrowForward />
                </IconButton>
              </Box>
            )}
          </MenuItem>
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

          {/* دکمه خروج که مدال را نمایش می‌دهد */}
          <Button sx={styles.logoutButton} onClick={() => setIsModalOpen(true)}>
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

      {/* نمایش مدال تایید خروج */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCancelLogout}
        title="خروج از حساب کاربری"
        description={
          logoutRout
            ? "آیا میخواهید از حساب کاربری خارج شوید؟"
            : "خروج از حساب کاربری به معنی پایان ساعت کاری می باشد. آیا میخواهید از حساب کاربری خارج شوید؟"
        }
        confirmText="خروج از حساب کاربری"
        cancelText="بازگشت"
        onConfirm={handleLogout}
        onCancel={handleCancelLogout}
      />
    </Box>
  );
};

export default SideBarDashboard;
