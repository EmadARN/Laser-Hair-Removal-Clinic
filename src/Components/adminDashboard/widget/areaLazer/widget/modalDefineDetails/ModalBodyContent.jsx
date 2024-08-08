import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

const ModalBodyContent = () => {
  return (
    <>
      <FormControl>
        <FormLabel>نام ناحیه</FormLabel>
        <Input size="lg" placeholder="نام ناحیه" />
        {/* ref={initialRef} */}
      </FormControl>

      <FormControl mt={8}>
        <FormLabel>مبلغ (تومان)</FormLabel>
        <Input size="lg" placeholder="مبلغ (تومان)" />
      </FormControl>
      <FormControl mt={8}>
        <FormLabel>مدت زمان</FormLabel>
        <SimpleGrid minChildWidth="60px" spacing="10px" pt={2}>
          {[5, 10, 15, 20, 25, 30, 35].map((item, index) => {
            return (
              <Button
                key={index}
                width="50px"
                rounded={4}
                color="blue"
                bgColor="transparent"
                variant="outline"
              >
                {item}
              </Button>
            );
          })}
        </SimpleGrid>
      </FormControl>
    </>
  );
};

export default ModalBodyContent;
