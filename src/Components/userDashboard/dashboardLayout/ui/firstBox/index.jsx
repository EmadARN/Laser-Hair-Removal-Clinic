import React from "react";
import NewUser from "./NewUser";
import ExistUser from "./ExistUser";

const FirstBox = ({
  sessionRecords,
  loading,
  handleButtonClick,
  operatorName,
}) => {
  return sessionRecords?.last_reserve ? (
    <ExistUser sessionRecords={sessionRecords} operatorName={operatorName} />
  ) : (
    <NewUser loading={loading} handleButtonClick={handleButtonClick} />
  );
};

export default FirstBox;
