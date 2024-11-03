import RightBar from "@/Components/home/drawer/Drawer";
import MainModal from "@/Components/home/signinModal/main";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

export default function NavBar({ bgColor }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [cookies] = useCookies(["auth_token"]);
  const [isScrolled, setIsScrolled] = useState(false);

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
      onOpen();
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
      zIndex={5}
      transition="all 0.3s"
      h={isScrolled ? "12" : "16"}
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
            <MenuButton
              onClick={handleAvatarClick}
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
      <MainModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}
