import React, { useEffect, useState } from "react";
import { Item } from "./Items";

const Body = ({ selected, setSelected, admintDatas, receptionDatas }) => {
  const [pathname, setPathname] = useState(null);
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const adminOrRecption =
    pathname === "/AdminDashboard"
      ? admintDatas
      : pathname === "/ReseptionDashboard"
      ? receptionDatas
      : [];
  return (
    <>
      {adminOrRecption.map((item) => (
        <React.Fragment key={item.key}>
          <Item
            title={item.amount}
            to="/"
            icon={item.icon}
            selected={selected}
            setSelected={setSelected}
            colorHover={"#868dfb"}
            color={"gray"}
          />
        </React.Fragment>
      ))}

      {/* <Item
        title="لیست مراجعین"
        to="/team"
        icon={<IoMdPeople />}
        selected={selected}
        setSelected={setSelected}
        colorHover={"#868dfb"}
        color={"gray"}
      /> */}
    </>
  );
};

export default Body;
