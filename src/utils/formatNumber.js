export const formatNumber = (value) => {
  return value.toString().replace(/\d(?=(\d{3})+$)/g, "$&,");
};

export const removeCommas = (value) => {
  return value.replace(/,/g, "");
};
