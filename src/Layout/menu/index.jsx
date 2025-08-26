import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import CustomModal from "@/Common/attentionModal/CustomModal";
import { logOutAsyncUsers } from "@/features/logOutSlice";
import MenuContent from "./MenuContent";

const Menu = ({ show = true, admintDatas = [], receptionDatas = [] }) => {
  const [active, setActive] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const pathname = router.pathname;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookies, , removeCookie] = useCookies([
    "auth_Admin_token",
    "auth_Employee_token",
  ]);
  const dispatch = useDispatch();

  if (!show) return null;

  const menuItems = pathname.startsWith("/adminDashboard")
    ? admintDatas
    : pathname.startsWith("/reseptionDashboard")
    ? receptionDatas
    : [];

  const handleLogout = async () => {
    try {
      await dispatch(
        logOutAsyncUsers({
          token: cookies.auth_Employee_token || cookies.auth_Admin_token,
        })
      ).unwrap();

      removeCookie("auth_Admin_token", { path: "/" });
      removeCookie("auth_Employee_token", { path: "/" });

      router.push("/panel");
      setIsModalOpen(false);
    } catch (error) {}
  };

  const handleCancelLogout = () => setIsModalOpen(false);

  const menuContent = (
    <MenuContent
      menuItems={menuItems}
      active={active}
      setActive={setActive}
      router={router}
      onLogoutClick={() => setIsModalOpen(true)}
    />
  );

  return (
    <>
      {isSmallScreen ? (
        <>
          {/* دکمه همبرگر همیشه ثابت بالای صفحه */}
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            display="inline"
            zIndex={1000}
            size="lg"
            variant="ghost"
          />

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent sx={{ pt: 12, zIndex: 2000 }} dir="rtl">
              <DrawerCloseButton
                position="absolute"
                left="1rem"
                right="auto"
                top="1rem"
                zIndex={3000}
                aria-label="بستن"
              />{" "}
              {menuContent}
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box position="fixed" right="1rem" top="4rem" dir="rtl">
          {menuContent}
        </Box>
      )}

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCancelLogout}
        title="خروج از حساب کاربری"
        description={
          pathname.startsWith("/adminDashboard")
            ? "آیا میخواهید از حساب کاربری خارج شوید؟"
            : "خروج از حساب کاربری به معنی پایان ساعت کاری می باشد. آیا میخواهید از حساب کاربری خارج شوید؟"
        }
        confirmText="خروج از حساب کاربری"
        cancelText="بازگشت"
        onConfirm={handleLogout}
        onCancel={handleCancelLogout}
      />
    </>
  );
};

export default Menu;
