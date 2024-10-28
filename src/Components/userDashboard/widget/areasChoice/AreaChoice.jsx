import React from "react";
import { Box, Checkbox, Flex, Stack, Text } from "@chakra-ui/react";
import AccordionMenu from "../accordionMenu/AccordionMenu";

const AreaChoice = ({
  areas,
  checkedItems,
  allChecked,
  handleSelectAll,
  handleCheckboxChange,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box bgColor="white" rounded="8px" p={8} mt={8}>
        <Box sx={{ display: "flex", alignSelf: "start" }}>
          <Text>نواحی مورد نظر خود را انتخاب کنید</Text>
        </Box>
        <Flex>
          <Stack mt={1} spacing={1}>
            <Checkbox
              isChecked={allChecked}
              onChange={(e) => handleSelectAll(e.target.checked)}
            >
              انتخاب همه
            </Checkbox>
            <Stack>
              {areas.all_laser_area_object?.first_type?.map((item, index) => (
                <Flex
                  sx={{
                    border: "2px solid #1111",
                    rounded: "8px",
                    minWidth: { base: "300px", sm: "500px" },
                    width: "100%",
                    py: 1,
                  }}
                  key={index}
                  justifyContent="space-between"
                  gap="50px"
                >
                  <Checkbox
                    isChecked={checkedItems[index]}
                    onChange={(e) =>
                      handleCheckboxChange(index, e.target.checked)
                    }
                    title={item.label}
                  >
                    {item.label}
                  </Checkbox>
                  <Box>
                    <span>قیمت</span> {item.price}
                  </Box>
                </Flex>
              ))}
            </Stack>
            {/* <Box pt={2}>
              <AccordionMenu />
            </Box> */}
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AreaChoice;
