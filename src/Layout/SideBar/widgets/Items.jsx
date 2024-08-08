import { Box, Text } from "@chakra-ui/react";
import { MenuItem } from "react-pro-sidebar";
export const Item = ({
  title,
  icon,
  selected,
  setSelected,
  colorHover,
  color,
  isCollapsed,
}) => {
  return (
    <Box
      sx={{
        "& .ps-menu-button": {
          fontSize: { base: "12px", md: "14px", lg: "16px" },
          w: "100%",
          px: isCollapsed == false ? "0px !important" : "20px !important",
        },
        "& .ps-menu-button:hover": {
          color: `${colorHover} !important`,
        },
      }}
    >
      <MenuItem
        active={selected === title}
        style={{
          color: `${color}`,
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Text>{title}</Text>
        {/* <Link to={to} /> */}
      </MenuItem>
    </Box>
  );
};
