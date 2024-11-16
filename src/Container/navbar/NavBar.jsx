import RightBar from "@/Components/home/drawer/Drawer";
import { Box, Flex, Avatar, Button, Menu, MenuButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { FaUser } from "react-icons/fa";

export default function NavBar({ bgColor }) {
  const router = useRouter();
  const [cookies] = useCookies(["auth_token"]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set to true after the component mounts in the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const noRedirectRoutes = ["/", "/contactUs", "/aboutUs"];
    if (cookies.auth_token && !noRedirectRoutes.includes(router.pathname)) {
      if (router.pathname !== "/userDashboard") {
        router.push("/userDashboard");
      }
    }
  }, [cookies.auth_token, router]);

  const handleAvatarClick = () => {
    if (cookies.auth_token) {
      router.push("/userDashboard");
    } else {
      router.push("/signInCustomer");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={32}
      stroke="currentColor"
      width={32}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
      />
    </svg>
  );

  return (
    <Box
      w="100%"
      position="fixed"
      bg={bgColor}
      px={4}
      py={isScrolled ? 6 : 9}
      zIndex={5}
      transition="all 0.3s"
      h={isScrolled ? "8" : "16"}
      borderBottom={isScrolled ? "1px solid #1113" : "none"}
    >
      <Flex h="100%" alignItems="center">
        <Flex w={"30%"} flexGrow={1}>
          <Box display={{ base: "block", md: "none" }}>
            <RightBar />
          </Box>
          <Flex
            display={{ base: "none", md: "flex" }}
            gap={8}
            fontFamily={"IRANYekan-Medium"}
            color="gray.600"
          >
            <NavLink path="/">ساید لیزر</NavLink>
            <NavLink path="/contactUs">ارتباط با ما</NavLink>
            <NavLink path="/aboutUs">درباره ما</NavLink>
          </Flex>
        </Flex>
        <Flex w={"30%"} flexGrow={1} spacing={8} alignItems="center">
          <Box color="#7563DC">
            <Logo />
          </Box>
        </Flex>
        <Flex alignItems="center">
          <Menu>
            <Box
              onClick={handleAvatarClick}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              {isClient &&
                (cookies.auth_token ? (
                  <FaUser size={20} color="gray" />
                ) : (
                  <Button
                    color="white"
                    bgColor="brand.400"
                    _hover={{ bg: "purple.500" }}
                    w={["100%", "auto"]} // دکمه در صفحه‌های کوچک 100% عرض خواهد داشت
                    fontSize={["sm"]} // اندازه فونت در صفحه‌های کوچک "sm" و در صفحه‌های بزرگتر "md"
                    px={4} // فاصله افقی داخلی دکمه
                    py={3} // فاصله عمودی داخلی دکمه
                  >
                    الان رزرو نوبت
                  </Button>
                ))}
            </Box>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
