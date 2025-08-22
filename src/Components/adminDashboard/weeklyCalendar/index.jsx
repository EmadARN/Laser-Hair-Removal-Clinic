import React, { useState, useEffect, useRef } from "react";
import { Box, useDisclosure, Button, Flex, useToast } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { FaCalendarAlt } from "react-icons/fa";
import TableWeekly from "./ui/TableWeekly";
import OperatorModal from "./ui/OperatorModal";
import AdminHeader from "../shared/AdminHeader";
import DataSlider from "./ui/DataSlider";
import CustomButton from "@/Common/customeButton/CustomeButton";
import { daysOfWeek } from "@/constants";
import {
  getAsyncListDateOperator,
  getAsyncOperatorList,
  getSettingInformation,
  operatorProgramList,
} from "@/features/adminDashboard/adminThunks";
import { useDispatch, useSelector } from "react-redux";
import { getDateParts } from "../utils/getDateParts";

const WeeklyCalendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const toast = useToast();
  const [selectedCell, setSelectedCell] = useState(null);
  const [tableData, setTableData] = useState({ day: daysOfWeek, time: [] });
  const [opProgramList, setOpProgramList] = useState([]);

  const dispatch = useDispatch();
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
  const handleCellClickAndOpenModal = (day, shift, index) => {
    setSelectedCell({ day, shift, index });
    onOpen();
  };

  // دریافت selectedIndex و لیست فعلی
  const getSelectedIndexAndList = () => {
    if (!selectedCell) return null;

    const selectedIndex = selectedCell.index;
    const currentList =
      opProgramList.length > 0 ? opProgramList : operatorsDate.operator_program;

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

    setOpProgramList(updatedProgramList);
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

    setOpProgramList(updatedProgramList);
    onClose();
  };

  // دانلود جدول به صورت PDF از طریق چاپ مرورگر
  const downloadPDF = () => {
    const printableElement = document.getElementById("printable-table");

    if (printableElement) {
      window.print();
      toast({
        title: "پرینت موفق!",
        description: "جدول با موفقیت آماده پرینت شد.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "خطا در پرینت!",
        description: "جدول پیدا نشد.",
        status: "error",
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
        operator_program_list: opProgramList,
      })
    );

    downloadPDF();
  };

  const programList =
    opProgramList.length === 0 ? operatorsDate.operator_program : opProgramList;

  return (
    <>
      {/* Header */}
      <Box
        width={{ base: "110vw", md: "100%" }}
        mr={{ base: 8, md: 0 }}
        display={"flex"}
        mb={{ base: 6, md: 0 }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
      >
        <Flex py={2} alignItems="center">
          <AdminHeader
            operator_list={operators.operator_list}
            headerTitle="برنامه هفتگی"
            icon={<FaCalendarAlt />}
            dataSlider={<DataSlider />}
            iconBtnDisply="none"
            BtnDisply="none"
          />
        </Flex>
        <Box>
          <CustomButton onClick={handleSelect}>فرستادن برنامه</CustomButton>
        </Box>
      </Box>
      <Box width={{ base: "120vw", sm: "100vw", md: "100%" }}>
        {/* Table */}
        <Box
          width="100%"
          overflowX="auto"
          borderWidth="1px"
          borderRadius="md"
          p={6}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <TableWeekly
            handleCellClick={handleCellClickAndOpenModal}
            tableData={tableData}
            programList={programList}
          />
        </Box>

        {/* Modal */}
        <OperatorModal
          isOpen={isOpen}
          onClose={onClose}
          operators={operators}
          handleOperatorSelect={handleOperatorSelect}
          programList={programList}
          selectedCell={selectedCell}
          handleDeleteOperator={handleDeleteOperator}
        />
      </Box>
    </>
  );
};

export default WeeklyCalendar;
