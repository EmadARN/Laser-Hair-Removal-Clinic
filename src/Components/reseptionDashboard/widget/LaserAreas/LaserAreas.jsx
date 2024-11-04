import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { thirdBox, fourthBox, fifthBox, sisxthBox } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getLazerAreas } from "@/features/receptionDashboard/receptionDashboardSlice";

const LaserAreas = ({ setStep, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [{ auth_Employee_token }] = useCookies(["auth_Employee_token"]);
  const dispatch = useDispatch();
  const { LazerAreas } = useSelector((store) => store.receptionDashboardSlice);

  // Handle fetching laser areas
  useEffect(() => {
    dispatch(getLazerAreas({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  // Responsive value for button width
  const buttonWidth = useBreakpointValue({ base: "100%", md: "30%" });

  const removeHandle = (id) => {
    setSelectedOptions(selectedOptions.filter((item) => item.id !== id));
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedId = e.target.selectedOptions[0].getAttribute("data-id");

    if (selectedOptions.some((option) => option.id === selectedId)) return;

    setSelectedOptions([
      { id: selectedId, value: selectedValue },
      ...selectedOptions,
    ]);
  };

  return (
    <>
      <Select
        placeholder="یک ناحیه را انتخاب کنید"
        onChange={handleSelectChange}
        p={3}
        mb={4} // Add spacing below the select box
      >
        {LazerAreas?.all_laser_area_object?.first_type?.map((item) => (
          <option key={item.value} data-id={item.value} value={item.label}>
            {item.label}
          </option>
        ))}
      </Select>

      <Box sx={thirdBox}>
        <Text color={"#555"} fontSize="lg" fontWeight="bold">
          نواحی انتخاب شده
        </Text>
        <Box mt={3} display="flex" flexWrap="wrap" gap={2}>
          {selectedOptions.map((option) => (
            <Box sx={fourthBox} key={option.id}>
              <Box display="flex" alignItems="center" gap={2}>
                <MdCancel
                  cursor="pointer"
                  onClick={() => removeHandle(option.id)}
                />
                {option.value}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={fifthBox}>
        <Box
          sx={sisxthBox}
          display="flex"
          justifyContent="space-between"
          gap={3}
          mt={4}
        >
          <Button bgColor="#3854c4" color="#fff" width={buttonWidth}>
            تایید نواحی
          </Button>
          <Button
            onClick={() => {
              onClose();
              setStep(0);
            }}
            width={buttonWidth}
          >
            لغو تغییرات
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LaserAreas;
