export const firstBox = (bgColor) => {
  const S2 = {
    position: "relative",
    borderRadius: "10px",
    mb: 3,
    width: "100%",
    h: "auto",
    p: "4",
    bgColor: { bgColor },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return S2;
};

export const seccondBox = (bgcolor2) => {
  const S3 = {
    top: -5,
    position: "absolute",
    borderRadius: "50%",
    p: 2,
    bgColor: { bgcolor2 },
  };
  return S3;
};
export const TextStyle = (textColor) => {
  const S4 = {
    color: { textColor },
    fontWeight: "bold",
    fontSize: { sm: "14px", md: "25px" },
  };
  return S4;
};
