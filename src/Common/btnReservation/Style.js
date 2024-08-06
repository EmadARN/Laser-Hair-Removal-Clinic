export const ButtonStyle = (px, py, width, rounded) => {
  const S1 = {
    width,
    px,
    py,
    rounded,
    variant: "solid",
    bgColor: "#7563DC",
    color: "purple.50",
    "&:hover": {
      bgColor: "purple.100",
      color: "purple.500",
    },
    transition: ".5s",
    mr: 3,
    fontWeight: "500",
  };

  return S1;
};
