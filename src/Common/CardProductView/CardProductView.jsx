import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Boxstyle1 } from "./style";
import CardProductView_List from "./widgets/CardProductView_List";

function CardProductView({ displayxsHome, data }) {
  const [activeTab, setActiveTab] = useState(1);
  const [colorTab, setColorTab] = useState(1);

  const colorText = (item) => {
    const ct = colorTab === item.id ? "#fff" : "#222";
    return ct;
  };
  const bgColor = (item) => {
    const br = activeTab !== item.id ? "#f9f9f9" : "#7563DC";
    return br;
  };
  return (
    <Box mt={12} sx={Boxstyle1(displayxsHome)}>
      {data.map((item) => {
        return (
          <CardProductView_List
            key={item.id}
            item={item}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            colorTab={colorTab}
            setColorTab={setColorTab}
            colorText={colorText}
            bgColor={bgColor}
          />
        );
      })}
    </Box>
  );
}
export default CardProductView;
