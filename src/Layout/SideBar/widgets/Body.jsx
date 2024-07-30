import React from "react";
import { Item } from "./Items";
import { SlCalender } from "react-icons/sl";
import { IoMdPeople } from "react-icons/io";
const Body = ({ selected, setSelected }) => {
  return (
    <>
      <Item
        title="نوبت های روز"
        to="/"
        icon={<SlCalender />}
        selected={selected}
        setSelected={setSelected}
        colorHover={"#868dfb"}
        color={"gray"}
      />

      <Item
        title="لیست مراجعین"
        to="/team"
        icon={<IoMdPeople />}
        selected={selected}
        setSelected={setSelected}
        colorHover={"#868dfb"}
        color={"gray"}
      />
    </>
  );
};

export default Body;
