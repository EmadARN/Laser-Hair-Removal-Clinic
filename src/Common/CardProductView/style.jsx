export const Boxstyle1 = (displayxsHome) => {
  const s1 = {
    display: "flex",
    gap: "5px",
    overflowX: "auto",
    maxWidt: "900px",
    width: "85vw",

  };
  return s1;
};

export const style1 = (bgColor, item) => {
  const s1 = {
    minWidth: "130px",
    maxHeight: { xs: "160px", md: "160px" },
    width: "94%",
    height: { xs: "65%", md: "100%" },
    backgroundColor: bgColor(item),
    padding: { xs: 2, md: 5, lg: 7 },
    borderRadius: "15px",
    cursor: "pointer",
  };

  return s1;
};

export const style2 = (colorText, item) => {
  const s2 = {
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    color: colorText(item),
    scrollSnapAlign: "start",
  };
  return s2;
};
export const style3 = (colorText, item) => {
  const s3 = {
    fontWeight: "bold",
    textAlign: "center",
    color: colorText(item),
    paddingTop: "15px",
    whiteSpace: "nowrap",
    fontSize: "14px",
    WebkitUserSelect: "none" /* Safari */,
    MsUserSelect: "none" /* IE 10 and IE 11 */,
    userSelect: "none" /* Standard syntax */,
    scrollSnapAlign: "start",
  };
  return s3;
};
