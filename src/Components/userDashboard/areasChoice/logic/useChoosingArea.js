import { useState, useEffect } from "react";

export const useChoosingArea = (areas) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [reserveId, setReserveId] = useState([]);

  useEffect(() => {
    if (areas?.all_laser_area_object?.first_type) {
      setCheckedItems(
        new Array(areas.all_laser_area_object.first_type.length).fill(false)
      );
    }
  }, [areas]);

  const allChecked = checkedItems.length > 0 && checkedItems.every(Boolean);

  const handleSelectAll = (isChecked) => {
    setCheckedItems(new Array(checkedItems.length).fill(isChecked));
    const allIds = isChecked
      ? areas.all_laser_area_object.first_type.map((userId) => userId.value)
      : [];
    setReserveId(allIds);
  };

  const handleCheckboxChange = (index, isChecked) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;
    setCheckedItems(newCheckedItems);

    const userIdValue = areas.all_laser_area_object.first_type[index].value;
    setReserveId((prevReserveId) =>
      isChecked
        ? [...prevReserveId, userIdValue]
        : prevReserveId.filter((id) => id !== userIdValue)
    );
  };

  return {
    checkedItems,
    reserveId,
    allChecked,
    handleSelectAll,
    handleCheckboxChange,
  };
};
