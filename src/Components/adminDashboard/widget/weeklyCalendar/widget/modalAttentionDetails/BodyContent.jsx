import { Stack, Text } from "@chakra-ui/react";

const BodyContent = () => {
  return (
    <Stack gap={8}>
      <Text>آیا از فرستاندن برنامه به اوپراتور ها مطمئن هستدید</Text>
      <Text>
        برنامه به صورت خودکار به صورت لینک به اوپراتورها ارسال خواهد شد و
        همینطور نسخه pdf به صورت اتومات دانلود خواهد شد
      </Text>
    </Stack>
  );
};

export default BodyContent;
