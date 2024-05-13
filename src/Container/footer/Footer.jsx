import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import FooterSub from "./widgets/FooterSub";

const ListHeader = ({ children }) => {
  return (
    <Text fontSize="sm" color={"gray.300"}>
      {children}
    </Text>
  );
};
export default function Footer() {
  return (
    <Box bg={useColorModeValue("#7563DC")} color={useColorModeValue("gray.50")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
          <Stack align={"flex-start"} fontWeight="bold" fontSize="16px">
            <Link href={"#"}>خانه</Link>
            <Link py={1} href={"#"}>
              درباره لیزر و سوالات متداول
            </Link>
            <Link href={"#"}>قوانین و مقررات</Link>
            <Link py={1} href={"#"}>
              حساب کاربری
            </Link>
            <Link href={"#"}>رزرو نوبت</Link>
          </Stack>
          <Stack>
            <ListHeader>آدرس:</ListHeader>
            <Text href={"#"} mb={3}>
              اصفهان، میدان آزادی، ابتدای خیابان چهارباغ بالا، نرسیده به شرکت
              زمزم، کوچه جنب بانک ملت (مسجدالرضا-شماره 35) ابتدای کوچه، سمت چپ،
              ساختمان اداری-پزشکی 99، طبقه 3، واحد 32
            </Text>
            <ListHeader>منشی اصلی:</ListHeader>
            <Text href={"#"}> 09195655654 - 0933656670</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <FooterSub />
      </Box>
    </Box>
  );
}
