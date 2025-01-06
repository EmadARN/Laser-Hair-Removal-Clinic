import { useState } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";

const useDateRange = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  const formatDate = (date) => (date ? date.format("YYYY/MM/DD") : null);

  const handleDateChange = (dates) => {
    if (dates.length === 2) {
      const [start, end] = dates.sort((a, b) => a - b);
      setDateRange({ from: formatDate(start), to: formatDate(end) });
    } else {
      setDateRange({ from: formatDate(dates[0]), to: null });
    }
  };

  const handleTodayClick = () => {
    const today = new DateObject({ calendar: persian });
    const formattedToday = formatDate(today);
    setDateRange({ from: formattedToday, to: formattedToday });
  };

  return { dateRange, handleDateChange, handleTodayClick };
};

export default useDateRange;
