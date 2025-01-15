import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getCustomerName } from "@/utils/getCustomerName";
import {
  addcharge,
  getCutomerList,
  reservesListPerson,
} from "@/features/receptionDashboard/receptionThunks";
import PatientsProfile from "./ui/PaitientsProfile";
import { useCustomToast } from "@/utils/useCustomToast ";

const PatientList = ({ todayReserve, isPaymentTable }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ auth_Employee_token }] = useCookies(["auth_Employee_token"]);
  const [selectedId, setSelectedId] = useState();
  const [selectedReserve, setSelectedReserve] = useState(null);
  const [profileInfo, setProfileInfo] = useState(null);
  const { showToast } = useCustomToast();
  const dispatch = useDispatch();
  const { reservesLists, cutomerList } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  const handleProfileClick = (item) => {
    // تعداد جلسات را محاسبه می‌کنیم
    const sessionLength = reservesLists.reserve_list
      ? reservesLists.reserve_list.length
      : 0;

    // اطلاعات پروفایل را با تعداد جلسات به‌روزرسانی می‌کنیم
    setProfileInfo({ ...item, sessionLength });
    dispatch(reservesListPerson({ username: item.user, auth_Employee_token }));
    onOpen();
  };

 
  

  const handleChargeClick = async () => {
    console.log('sssss',selectedId);
    
    const result = await dispatch(
      addcharge({ username: selectedId &&sele, auth_Employee_token })
    );
    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: "با موفقیت ثبت شد",

        status: "success",
      });

    } else {
      showToast({
        title: "خطای ناشناخته رخ داده است",
        
        status: "error",
      });
    }
    onClose()
  };
  useEffect(() => {
    dispatch(getCutomerList({ auth_Employee_token }));
  }, []);

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <TableContainer>
        <Table
          cursor={"pointer"}
          overflowY="auto"
          width="100%"
          size="sm"
          dir="rtl"
          variant="striped"
        >
          <Tbody>
            {todayReserve?.all_list
              ?.filter((item) => !isPaymentTable || item.payed) // Show only paid users if isPaymentTable is true
              .map((item) => (
                <Tr key={item.id} onClick={() => handleProfileClick(item)}>
                  {/* ستون نام کاربر */}
                  <Td
                    display={{ base: "none", sm: "table-cell" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    {getCustomerName(item.user, cutomerList)}
                  </Td>

                  {/* دکمه‌ها */}
                  <Td textAlign="center">
                    <Button
                      onClick={() => {
                        setSelectedId(item);
                        onOpen();
                      }}
                      size={{ base: "xs", md: "sm" }}
                      bg="transparent"
                      color="blue"
                      px={2}
                    >
                      ورود به شارژ
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      <PatientsProfile
        handleChargeClick={handleChargeClick}
        isOpen={isOpen}
        onClose={onClose}
        profileInfo={profileInfo}
        cutomerList={cutomerList}
      />
    </Box>
  );
};

export default PatientList;
