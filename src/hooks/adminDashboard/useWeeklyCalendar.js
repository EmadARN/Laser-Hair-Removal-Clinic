import { useState, useEffect, useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { getDateParts } from "@/utils/extractDate";
import { daysOfWeek } from "@/constants";
import {
  getAsyncListDateOperator,
  getAsyncOperatorList,
  getSettingInformation,
} from "@/features/adminDashboard/adminThunks";
import { useDispatch, useSelector } from "react-redux";

const useWeeklyCalendar = ({ auth_Admin_token, onClose }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const tableRef = useRef(null); // استفاده از ref برای اشاره به جدول
  const [selectedCell, setSelectedCell] = useState(null);
  const [tableData, setTableData] = useState({ day: daysOfWeek, time: [] });
  const [op_program_list, set_op_program_list] = useState([]);

  const { operators, operatorsDate, dateRanges, dataRangeStatus, settingInfo } =
    useSelector((state) => state.adminDashboard);

  const {
    year: date_year,
    month: date_month,
    day: date_day,
  } = getDateParts(dateRanges?.date);

  // همگام‌سازی settingInfo با tableData
  useEffect(() => {
    if (settingInfo) {
      setTableData((prevData) => ({
        ...prevData,
        time: settingInfo,
      }));
    }
  }, [settingInfo]);

  // Fetch اطلاعات اولیه
  useEffect(() => {
    if (auth_Admin_token) {
      dispatch(getAsyncOperatorList({ token: auth_Admin_token }));
      dispatch(getSettingInformation({ token: auth_Admin_token }));

      if (dataRangeStatus) {
        dispatch(
          getAsyncListDateOperator({
            token: auth_Admin_token,
            date_year,
            date_month,
            date_day,
          })
        );
      }
    }
  }, [
    date_year,
    date_month,
    date_day,
    dataRangeStatus,
    auth_Admin_token,
    dispatch,
  ]);

  // مدیریت انتخاب سلول
  const handleCellClick = (day, shift, index) =>
    setSelectedCell({ day, shift, index });

  // دریافت selectedIndex و لیست فعلی
  const getSelectedIndexAndList = () => {
    if (!selectedCell) return null;

    const selectedIndex = selectedCell.index;
    const currentList =
      op_program_list.length > 0
        ? op_program_list
        : operatorsDate.operator_program;

    return { selectedIndex, currentList };
  };

  // مدیریت انتخاب اپراتور
  const handleOperatorSelect = (operator) => {
    const { selectedIndex, currentList } = getSelectedIndexAndList();

    const updatedProgramList = currentList.map((item, index) =>
      index === selectedIndex
        ? {
            ...item,
            operator_name: `${operator.name} ${operator.last_name}`,
            operator: operator.username,
          }
        : item
    );

    set_op_program_list(updatedProgramList);
    onClose();
  };

  // مدیریت حذف اپراتور
  const handleDeleteOperator = () => {
    const { selectedIndex, currentList } = getSelectedIndexAndList();
    const updatedProgramList = currentList.map((item, index) =>
      index === selectedIndex
        ? {
            ...item,
            operator_name: "",
            operator: "",
          }
        : item
    );

    set_op_program_list(updatedProgramList);
    onClose();
  };

  // دانلود جدول به صورت PDF از طریق چاپ مرورگر
  const downloadPDF = () => {
    // باز کردن پنجره چاپ مرورگر
    if (window.print) {
      window.print();
      toast({
        title: "برنامه ثبت شد!",
        description: "برنامه با موفقیت ثبت شد و فایل PDF دانلود می‌شود.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "برنامه ثبت نشد!",
        description: "مرورگر شما از قابلیت چاپ پشتیبانی نمیکند",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  // ارسال برنامه و دانلود PDF
  const handleSelect = () => {
    dispatch(
      operatorProgramList({
        token: auth_Admin_token,
        operator_program_list: op_program_list,
      })
    );

    // بعد از ارسال برنامه، چاپ را فعال کنید
    downloadPDF();
  };

  const programList =
    op_program_list.length === 0
      ? operatorsDate.operator_program
      : op_program_list;

  return {
    tableData,
    operators,
    programList,
    selectedCell,
    handleCellClick,
    handleOperatorSelect,
    handleDeleteOperator,
    handleSelect,
    tableRef, // ارسال ref به جدول
  };
};

export default useWeeklyCalendar;
