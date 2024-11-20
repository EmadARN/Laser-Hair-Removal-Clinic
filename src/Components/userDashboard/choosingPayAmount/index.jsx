import React, { useState } from "react";
import { Grid, Box, Text } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { AcceptBtn } from "../shared/acceptBtn/AcceptBtn";

const ChoosingPayAmount = ({ slug }) => {
  const [checkboxColor, setCheckboxColor] = useState(false);
  const [checkboxColor2, setCheckboxColor2] = useState(false);
  const handleChanged = (event) => {
    const isChecked = event.target.checked;
    setCheckboxColor(isChecked);
  };

  const handleChanged2 = (event) => {
    const isChecked = event.target.checked;
    setCheckboxColor2(isChecked);
  };
  return (
    <Grid
      pb={3}
      width="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        borderRadius={"10px"}
        display="flex"
        flexDirection="column"
        width={"450px"}
        h={"auto"}
        p={4}
        sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <Box mb={1} mr={2}>
          <Text
            fontWeight={"bold"}
            sx={{ fontSize: { sm: "12px", md: "15px" } }}
          >
            انتخاب مبلغ پرداخت
          </Text>
        </Box>

        <Box mb={2}>
          <Text
            sx={{ fontSize: { sm: "12px", md: "15px" }, whiteSpace: "nowrap" }}
          >
            مبلغی را که میخواهید به صورت آنلاین پرداخت کنید ،انتخاب کنید
          </Text>
        </Box>

        <Box
          w={"93%"}
          p={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} p={2} alignItems={"center"}>
            <Box ml={3}>
              <Box ml={2}>
                <Checkbox
                  name="checkboxGroup"
                  onChange={handleChanged}
                  colorScheme="brand.400"
                >
                  ودیعه
                </Checkbox>
              </Box>
            </Box>
          </Box>

          <Box>
            <Text>50,000تومان</Text>
          </Box>
        </Box>

        <Box
          w={"93%"}
          p={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} p={2} alignItems={"center"}>
            <Box ml={2}>
              <Checkbox
                name="checkboxGroup"
                colorScheme="purple"
                onChange={handleChanged2}
              >
                کل مبلغ
              </Checkbox>
            </Box>
          </Box>

          <Box>
            <Text>250,000تومان</Text>
          </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent="center" p={3}>
          <AcceptBtn text="پرداخت" bgColor={"transparent"} slug={slug} />
        </Box>
      </Box>
    </Grid>
  );
};

export default ChoosingPayAmount;
