import { Box, Flex, Menu } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { FaUser } from "react-icons/fa";
import { Logo } from "@/widget/Logo";
import Link from "next/link";
import CustomButton from "@/Common/customeButton/CustomeButton";
import RightBar from "../drawer";

export default function NavBar({ bgColor, py }) {
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      w="100%"
      position="fixed"
      bg={bgColor}
      px={4}
      py={isScrolled ? 6 : py || 9}
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
            <NavLink path="/">لیزر ساید</NavLink>
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
            <Link
              href={cookies.auth_token ? "/userDashboard" : "/signInCustomer"}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              {isClient &&
                (cookies.auth_token ? (
                  <FaUser size={20} color="gray" />
                ) : (
                  <CustomButton>الان رزرو کن</CustomButton>
                ))}
            </Link>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
