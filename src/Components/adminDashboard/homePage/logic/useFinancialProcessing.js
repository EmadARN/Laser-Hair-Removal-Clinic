import { useMemo } from "react";

const useFinancialProcessing = (operatorsDate, dateReserve) => {
  const formatOperatorName = (name) => {
    const names = name.split(" ");
    return names.length > 1
      ? `${names[0]} ${names[1]}, ${names.slice(2).join(" ")}`
      : name;
  };

  const filteredOperators = useMemo(() => {
    const mShiftOperators = new Set();
    const aShiftOperators = new Set();

    operatorsDate?.operator_program?.forEach((item) => {
      if (item.program_turn === "m") mShiftOperators.add(item.operator_name);
      else if (item.program_turn === "a")
        aShiftOperators.add(item.operator_name);
    });

    return {
      mShiftOperators: Array.from(mShiftOperators).map(formatOperatorName),
      aShiftOperators: Array.from(aShiftOperators).map(formatOperatorName),
    };
  }, [operatorsDate]);

  return { filteredOperators };
};

export default useFinancialProcessing;
