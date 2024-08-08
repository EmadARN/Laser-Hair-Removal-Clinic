import React, { useEffect, useState } from "react";
import { Item } from "./Items";

const Body = ({
  selected,
  setSelected,
  admintDatas,
  receptionDatas,
  isCollapsed,
}) => {
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
            isCollapsed={isCollapsed}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Body;
