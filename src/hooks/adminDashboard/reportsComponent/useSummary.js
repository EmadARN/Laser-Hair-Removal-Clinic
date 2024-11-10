import { useState, useCallback, useEffect } from "react";

const useSummary = (dateReserve) => {
  const [summary, setSummary] = useState({
    completeListLength: 0,
    totalPriceAmount: 0,
  });

  const calculateSummary = useCallback(() => {
    if (dateReserve?.complete_list) {
      setSummary({
        completeListLength: dateReserve.complete_list.length,
        totalPriceAmount: dateReserve.complete_list.reduce(
          (sum, item) => sum + item.total_price_amount,
          0
        ),
      });
    }
  }, [dateReserve]);

  useEffect(() => {
    calculateSummary();
  }, [calculateSummary]);

  return summary;
};

export default useSummary;
