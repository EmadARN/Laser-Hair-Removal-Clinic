import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";
import useAreaLazerForm from "../logic/useAreaLazerForm";

const AreaLazerForm = ({ areaToEdit, isEdit }) => {
  const {
    lazerArea,
    selectedItem,

    areaChangeHandler,
    handleButtonClick,
    handleSubmit,
  } = useAreaLazerForm(isEdit, areaToEdit);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>نام ناحیه</FormLabel>
        <Input
          name="name"
          value={lazerArea.name} // مقدار label برای name استفاده شود
          onChange={areaChangeHandler}
          size="lg"
          placeholder="نام ناحیه"
        />
      </FormControl>

      <FormControl mt={8}>
        <FormLabel>مبلغ (تومان)</FormLabel>
        <Input
          name="price"
          value={lazerArea.price}
          onChange={areaChangeHandler}
          size="lg"
          placeholder="مبلغ (تومان)"
        />
      </FormControl>

      <FormControl mt={8} display={isEdit ? "none" : "block"}>
        <FormLabel>مدت زمان</FormLabel>
        <SimpleGrid minChildWidth="60px" spacing="10px" pt={2}>
          {[5, 10, 15, 20, 25, 30, 35].map((item, index) => {
            const isSelected = selectedItem === item; // بررسی انتخاب
            return (
              <Button
                name="operate_time"
                onClick={() => handleButtonClick(item)}
                key={index}
                value={item}
                width="50px"
                rounded={4}
                color={isSelected ? "#fff" : "blue"}
                bgColor={isSelected ? "brand.400" : "transparent"}
                variant="outline"
              >
                {item}
              </Button>
            );
          })}
        </SimpleGrid>
      </FormControl>

      <CustomButton mt={4} type="submit" sx={{ w: "100%" }} colorScheme="blue">
        {isEdit ? "ویرایش" : "افزودن"}
      </CustomButton>
    </form>
  );
};

export default AreaLazerForm;
