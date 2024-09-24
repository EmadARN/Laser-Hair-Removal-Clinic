import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MenuItem } from "react-pro-sidebar";

export const Item = ({
  title,
  slug,
  icon,
  selected,
  setSelected,
  colorHover,
  color,
  isCollapsed,
}) => {
  const style = {
    "& .ps-menu-button": {
      fontSize: { base: "12px", md: "14px", lg: "16px" },
      w: "100%",
      px: isCollapsed ? "20px !important" : "0px !important",
    },
    "& .ps-menu-button:hover": {
      color: `${colorHover} !important`,
    },
  };
  const router = useRouter();
  // تابع برای ساختن مسیر درست
  const routers = () => {
    const basePath = "adminDashboard";
    const currentPath = router.pathname;
    return currentPath.includes(basePath) ? slug : `${basePath}/${slug}`;
  };

  return (
    <Box sx={style}>
      <MenuItem
        active={selected === title}
        style={{
          color: selected === title ? "#7563DC" : `${color}`,
        }}
        onClick={() => {
          setSelected(title);
          router.push(routers());
        }}
        icon={icon}
      >
        <Text>{title}</Text>
      </MenuItem>
    </Box>
  );
};
