import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLazerArea,
  getLazerAreas,
} from "@/features/adminDashboard/adminDashboardSlice";

const ModalBodyContent = ({ isEdit }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.adminDashboard);

  const [selectedItem, setSelectedItem] = useState(null);

  const [lazerArea, setLazerArea] = useState({
    deadline_reset: 0,
  });

  const areaChangeHandler = (e) => {
    const { value, name } = e.target;
    setLazerArea((prevForm) => ({
      ...prevForm,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleButtonClick = (value) => {
    setSelectedItem(value);
    setLazerArea((prevForm) => ({
      ...prevForm,
      operate_time: value,
    }));
  };

  const handleChange = async (e) => {
    e.preventDefault();
    await dispatch(addLazerArea({ ...lazerArea, token }));
    dispatch(getLazerAreas({ token }));
  };

  return (
    <>
      <FormControl>
        <FormLabel>نام ناحیه</FormLabel>
        <Input
          name="name"
          onChange={areaChangeHandler}
          size="lg"
          placeholder="نام ناحیه"
        />
        {/* ref={initialRef} */}
      </FormControl>

      <FormControl mt={8}>
        <FormLabel>مبلغ (تومان)</FormLabel>
        <Input
          name="price"
          onChange={areaChangeHandler}
          size="lg"
          placeholder="مبلغ (تومان)"
        />
      </FormControl>
      <FormControl mt={8}>
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
                color="blue"
                bgColor={isSelected ? "#999" : "transparent"}
                variant="outline"
              >
                {item}
              </Button>
            );
          })}
        </SimpleGrid>
      </FormControl>

      <Button onClick={handleChange} sx={{ w: "100%" }} colorScheme="blue">
        افزودن
      </Button>
    </>
  );
};

export default ModalBodyContent;
