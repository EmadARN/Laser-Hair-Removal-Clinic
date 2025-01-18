import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { toPersianDigits } from "@/utils/toPersianDigits";
import SocialMedias from "./SocialMedias";
import FooterSub from "./FooterSub";

const ListHeader = ({ children }) => {
  return (
    <Text fontSize="sm" color={"gray.300"}>
      {children}
    </Text>
  );
};
export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("brand.400")}
      color={useColorModeValue("gray.50")}
    >
      <Container as={Stack} maxW={"85%"} py={14}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={22}>
          <Stack align={"flex-start"}>
            <ListHeader>لیزر ساید:</ListHeader>
            <Text mb={3}>
              مرکز تخصصی لیزر موهای زائد با سابقه ی پنج ساله و استفاده از بهترین
              دستگاه لیزر موهای زائد با استفاده از مجرب ترین تیم اپراتور لیزر .
              برای رزرو نوبت لیزر کلیک کنید .{" "}
            </Text>
          </Stack>
          <Stack>
            <ListHeader>آدرس:</ListHeader>
            <Text href={"#"} mb={3}>
              تهران، میدان کاج، کوچه جنب بانک ملت ساختمان اداری-پزشکی ، طبقه 1،
              واحد 12
            </Text>
            <ListHeader>منشی اصلی:</ListHeader>
            <Text href={"#"}>
              {toPersianDigits(`09194444444 - 09124444444`)}
            </Text>
          </Stack>
          <Stack>
            <ListHeader>لیزر ساید در شبکه های اجتماعی:</ListHeader>
            <SocialMedias />
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={2}>
        <FooterSub />
      </Box>
    </Box>
  );
}
