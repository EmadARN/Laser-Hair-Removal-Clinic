//dateParts
const splitDate = (dateString, start, end) => {
  return dateString?.slice(start, end);
};

export const getDateParts = (dateString) => {
  const year = splitDate(dateString, 0, 4);
  const month = splitDate(dateString, 5, 6);
  const day = splitDate(dateString, 8, 10);
  return { year, month, day };
};
