import React from "react";
import { style1, style2, style3 } from "../style";
import { Box, Flex, Text } from "@chakra-ui/react";

const CardProductView_List = ({
  item,
  setColorTab,
  setActiveTab,
  colorText,
  bgColor,
}) => {
  const clickHandler = (id) => {
    setActiveTab(id);
    setColorTab(id);
  };

  return (
    <Flex className="cardc" justifyContent={"center"}>
      <Box
        mt={5}
        onClick={() => clickHandler(item.id)}
        sx={style1(bgColor, item)}
        key={item.id}
      >
        {item.h1 && item.h2 && item.name ? (
          <>
            <span
              onClick={() => clickHandler(item.id)}
              style={style2(colorText, item)}
            >
              {item.h1}
            </span>
            <Text
              onClick={(e) => clickHandler(item.id)}
              style={style3(colorText, item)}
            >
              {item.h2}
            </Text>

            <Text
              onClick={(e) => clickHandler(item.id)}
              style={style3(colorText, item)}
            >
              {item.name}
            </Text>
          </>
        ) : null}
        {item.icon && item.text && (
          <Flex
            pb={3}
            justifyContent={"center"}
            alignItems={"center"}
            h={"100%"}
            gap="10px"
          >
            <Text
              sx={{ pt: 3 }}
              onClick={() => clickHandler(item.id)}
              style={style2(colorText, item)}
            >
              {item.icon}
            </Text>
            <Text
              onClick={(e) => clickHandler(item.id)}
              style={style3(colorText, item)}
            >
              {item.text}
            </Text>
          </Flex>
        )}

        {item.time && (
          <Text
            sx={{
              pb: 3,
              justifyContent: "center",
              alignItems: "center",
              h: "100%",
            }}
            onClick={(e) => clickHandler(item.id)}
            style={style3(colorText, item)}
          >
            {item.time}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default CardProductView_List;
