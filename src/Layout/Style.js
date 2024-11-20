const styles = {
  container: {
    position: "sticky",
    top: 1,
    "& .ps-sidebar-container": {
      backgroundColor: "#fafafa!important",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
      borderRadius: "20px",
      position: "relative",
      h: "100vh",
    },
    "& .ps-menu-button": {
      backgroundColor: "transparent !important",
    },
    "& .ps-menu-button:active": {
      color: "#6870fa !important",
    },
  },
  logoutButton: {
    all: "unset",
    w: "100%",
    color: "#f13f4d",
    cursor: "pointer",
    "&:hover": {
      bgColor: "transparent",
    },
    transition: "all 0.5s ease",
    position: "absolute",
    bottom: 2,
  },
  logoutFlex: {
    mr: { base: "40px", md: "25px" },
    gap: 2,
    alignItems: "center",
    h: "100%",
    mb: 2,
  },
  logoutText: {
    fontSize: { base: "12px", md: "16px" },
  },
};

export default styles;
