import { useState, useEffect } from "react";

const useFinancialData = (dateReserve) => {
  const [totalPaidAmount, setTotalPaidAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (dateReserve?.all_list) {
      const paidTotal = dateReserve?.all_list
        .filter((item) => item.payed)
        .reduce((acc, item) => acc + item.total_price_amount, 0);
      setTotalPaidAmount(paidTotal || 0);
    }
  }, [dateReserve]);

  useEffect(() => {
    if (dateReserve?.all_list) {
      const total = dateReserve?.all_list.reduce(
        (acc, item) => acc + item.total_price_amount,
        0
      );
      setTotalAmount(total || 0);
    }
  }, [dateReserve]);

  return { totalPaidAmount, totalAmount };
};

export default useFinancialData;
