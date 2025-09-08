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
import { whitespace } from "stylis";

export default function NavBar({ bgColor, py }) {
  const router = useRouter();
  const [cookies] = useCookies(["auth_token"]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set to true after the component mounts in the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Redirect if logged in
  useEffect(() => {
    const noRedirectRoutes = ["/", "/contactUs", "/aboutUs"];
    if (cookies.auth_token && !noRedirectRoutes.includes(router.pathname)) {
      if (router.pathname !== "/userDashboard") {
        router.push("/userDashboard");
      }
    }
  }, [cookies.auth_token, router]);

  // Handle scroll effect
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
      <Flex h="100%" alignItems="center" justifyContent="space-between">
        {/* سمت چپ */}
        <Box
          w={{ base: "auto", md: "30%" }}
          display="flex"
          alignItems="center"
          gap={4}
        >
          {/* منوی موبایل فقط در base */}
          <Box display={{ base: "block", md: "none" }}>
            <RightBar />
          </Box>

          {/* لینک‌های دسکتاپ */}
          <Flex
            display={{ base: "none", md: "flex" }}
            gap={8}
            fontFamily="IRANYekan-Medium"
            color="gray.600"
          >
            <NavLink path="/" style={{ whitespace: "nowrap" }}>
              لیزر ساید
            </NavLink>
            <NavLink path="/contactUs" style={{ whitespace: "nowrap" }}>
              ارتباط با ما
            </NavLink>
            <NavLink path="/aboutUs" style={{ whitespace: "nowrap" }}>
              درباره ما
            </NavLink>
          </Flex>
        </Box>

        {/* وسط لوگو */}
        <Flex
          position={{ base: "absolute", md: "static" }}
          left={{ base: "50%", md: "auto" }}
          transform={{ base: "translateX(-50%)", md: "none" }}
          justifyContent="center"
          w="auto"
          color="#7563DC"
        >
          <Logo />
        </Flex>

        {/* سمت راست */}
        <Flex alignItems="center">
          {isClient && (
            <Menu>
              <Link
                href={cookies.auth_token ? "/userDashboard" : "/signInCustomer"}
                passHref
              >
                <Box
                  cursor="pointer"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                >
                  {cookies.auth_token ? (
                    <FaUser size={20} color="gray" />
                  ) : (
                    <CustomButton>الان رزرو کن</CustomButton>
                  )}
                </Box>
              </Link>
            </Menu>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
