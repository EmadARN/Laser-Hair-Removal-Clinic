export const firstBox = {
  display: { base: "none", md: "flex" },
  boxShadow: "1px 0px  20px pink",
  h: "100%",
  w: "100%",
};

export const seccondBox = ({ backgroundImage }) => {
  const S2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: { base: "center", md: "start" },
    flexDirection: "column",
    width: "100%",
    h: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",

    pr: { base: 0, md: 6 },
  };
  return S2;
};

export const TextStyle = {
  fontSize: { base: "18px", md: "30px" },
  fontWeight: "bold",
};

export const flexStyle = {
  mt: 8,

  gap: { base: "20px", md: "80px" },
  flexDirection: { base: "column", md: "row" },

  justifyContent: "space-between",
};

export const Button2Style = {
  colorScheme: "gray",
  size: "lg",

  color: "blue",
  fontSize: "14px",
  width: "100%",
  minWidth: "250px",
};
