import { Box, Text } from "@chakra-ui/react";
import { MenuItem } from "react-pro-sidebar";
export const Item = ({
  title,
  icon,
  selected,
  setSelected,
  colorHover,
  color,
}) => {
  return (
    <Box
      sx={{
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
