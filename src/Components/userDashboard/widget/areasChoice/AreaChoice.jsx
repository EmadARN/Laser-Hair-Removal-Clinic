import React, { useEffect } from "react";
import { Box, Checkbox, Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import AccordionMenu from "../accordionMenu/AccordionMenu";
import ReusableSession from "@/Components/adminDashboard/common/ReussableSession";
import { BiTargetLock } from "react-icons/bi";

const AreaChoice = ({ areas }) => {
  const [checkedItems, setCheckedItems] = React.useState(
    new Array(10).fill(false)
  );

  const allChecked = checkedItems.every(Boolean);

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box bgColor={"white"} rounded={"8px"} p={8} mt={8}>
        <Box sx={{ display: "flex", alignSelf: "start" }}>
          <Text>نواحی مورد نظر خود را انتخاب کنید</Text>
        </Box>
        <Flex>
          <Stack mt={1} spacing={1}>
            <Checkbox
              isChecked={allChecked}
              onChange={(e) => {
                const newCheckedItems = [...checkedItems];
                newCheckedItems.fill(e.target.checked);
                setCheckedItems(newCheckedItems);
              }}
            >
              انتخاب همه
            </Checkbox>
            <Stack>
              {areas.all_laser_area_object &&
              areas.all_laser_area_object.first_type.length > 0 ? (
                areas.all_laser_area_object.first_type.map((item, index) => {
                  return (
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
                        onChange={(e) => {
                          const newCheckedItems = [...checkedItems];
                          newCheckedItems[index] = e.target.checked;
                          setCheckedItems(newCheckedItems);
                        }}
                        title={item.label}
                        kon
                      >
                        {item.label}
                      </Checkbox>
                      <Box>
                        <span>قیمت</span> {item.price}
                      </Box>
                    </Flex>
                  );
                })
              ) : (
                <ReusableSession
                  text="ناحیه ای وجود ندارد"
                  icon={<BiTargetLock />}
                />
              )}
              {/* {checkboxData.map((checkbox, index) => (
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
                    onChange={(e) => {
                      const newCheckedItems = [...checkedItems];
                      newCheckedItems[index] = e.target.checked;
                      setCheckedItems(newCheckedItems);
                    }}
                    title={checkbox.label}
                  >
                    {checkbox.label}
                  </Checkbox>
                  <Box>
                    <span>قیمت</span> 1000 ریال
                  </Box>
                </Flex>
              ))} */}
            </Stack>
            <Box pt={8}>
              <AccordionMenu />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};
export default AreaChoice;
const checkboxData = [
  { label: "پشت لب و بانه", value: "backLipAndButtock" },
  { label: "صورت کامل", value: "fullFace" },
  { label: "صورت و گردن", value: "faceAndNeck" },
  { label: "باسن", value: "buttock" },
  { label: "زیر بکل ها", value: "underarms" },
  { label: "بیکنی", value: "bikini" },
  { label: "زیربغل ها و بیکنی", value: "underarmsAndBikini" },
  { label: "دست ها کامل", value: "fullArms" },
  { label: "پاها کامل", value: "fullLegs" },
  {
    label: "پاها، زیر یقل ها، بیکنی و باسن",
    value: "legsUnderarmsBikiniAndButtock",
  },
];
