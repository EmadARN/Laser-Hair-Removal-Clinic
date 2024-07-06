import React from "react";
import { style1, style2, style3 } from "../style";
import { Box, Text } from "@chakra-ui/react";

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
    <div className="cardc">
      <Box
        mt={5}
        onClick={() => clickHandler(item.id)}
        sx={style1(bgColor, item)}
        key={item.id}
      >
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
      </Box>
    </div>
  );
};

export default CardProductView_List;
