import React, { useEffect, useState } from "react";
import { Item } from "./Items";
import { useRouter } from "next/router";

const Body = ({
  selected,
  setSelected,
  admintDatas,
  receptionDatas,
  isCollapsed,
}) => {
  const router = useRouter();
  const pathname = router.pathname;

  const adminOrRecption = () => {
    if (pathname === `/adminDashboard/[adminDashboardSlug]`) {
      return admintDatas;
    } else if (pathname === "/reseptionDashboard") {
      return receptionDatas;
    }
  };

  return (
    <>
      {adminOrRecption().map((item) => (
        <React.Fragment key={item.key}>
          <Item
            title={item.amount}
            slug={item.slug}
            component={item.component}
            to={item.slug}
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
