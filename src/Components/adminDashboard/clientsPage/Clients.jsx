import React, { useEffect, useState } from "react";
import SearchInput from "@/Common/searchInput/SearchInput";
import { Box, Table, Tbody, Button, HStack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import Lists from "../shared/Lists";
import AccordionLists from "../shared/AccordionLists";
import { getCutomerList } from "@/features/adminDashboard/adminThunks";

const Clients = () => {
  const [step, setStep] = useState(0);
  const [clientData, setClientData] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // state برای جستجو
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // تعداد آیتم‌ها در هر صفحه

  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCutomerList({ auth_Admin_token }));
  }, [dispatch, auth_Admin_token]);

  const { loading, error, customerListAdmin } = useSelector(
    (store) => store.adminDashboard
  );

  // تابع فیلتر برای جستجو بر اساس اسم و فامیل
  const filterClients = (clients) => {
    if (!searchQuery) return clients; // اگر چیزی جستجو نشده، همه مشتری‌ها نمایش داده می‌شوند
    return clients.filter(
      (client) =>
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.last_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleRowClick = (item) => {
    const customer = item;
    const customerInfo = customerListAdmin.customer_information_list.find(
      (info) => info.user === customer.username
    );

    setClientData({
      username: customer.username,
      name: customer.name,
      last_name: customer.last_name,
      phone_number: customer.phone_number,
      national_code: customerInfo ? customerInfo.national_code : "",
      address: customerInfo ? customerInfo.address : "",
      house_number: customerInfo ? customerInfo.house_number : "",
      drug_hist: customerInfo ? customerInfo.drug_hist : false,
      decease_hist: customerInfo ? customerInfo.decease_hist : false,
      doctor: customerInfo ? customerInfo.doctor : "-",
      offline_number: customerInfo ? customerInfo.offline_num : 0,
      last_date: customerInfo ? customerInfo.last_date : "-",
    });

    setStep(1);
  };

  const mdCancelHandler = () => {
    setStep(0);
    setClientData({
      name: "",
      last_name: "",
      phone_number: "",
      national_code: "",
      address: "",
      house_number: "",
      drug_hist: false,
      decease_hist: false,
      doctor: "-",
      offline_number: 0,
    });
  };

  const filteredClients =
    customerListAdmin && customerListAdmin.customer_list
      ? filterClients(customerListAdmin.customer_list)
      : [];

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // محاسبه داده‌های صفحه جاری
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentClients = filteredClients.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // تعداد کل صفحات
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (step === 0) {
    return (
      <>
        <Box sx={{ py: { base: 4, md: 6 }, px: { base: 2, md: 4 } }}>
          <SearchInput
            placeholder="جستجو در بین مراجعین"
            size="lg"
            value={searchQuery}
            handlechange={handleChange}
          />
        </Box>
        <Box
          width={{ base: "110vw", md: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          px={{ base: 2, md: 4 }}
        >
          <Table
            mt={6}
            cursor="pointer"
            overflowY="auto"
            width="100%"
            size="sm"
            dir="rtl"
            variant=""
          >
            <Tbody>
              {!loading &&
              !error &&
              currentClients &&
              Array.isArray(currentClients)
                ? currentClients.map((item, index) => (
                    <Box key={index} onClick={() => handleRowClick(item)}>
                      <Lists
                        firstArea={item.name + " " + item.last_name}
                        editDeleteDisplay="none"
                        leftArrowDisplay="flex"
                      />
                    </Box>
                  ))
                : error
                ? console.log("Error:", error)
                : null}
            </Tbody>
          </Table>
        </Box>
        <HStack mt={4} justifyContent="center">
          <Button
            onClick={handlePrevPage}
            isDisabled={currentPage === 1}
          >
            صفحه قبل
          </Button>
          <Text>{`${currentPage} از ${totalPages}`}</Text>
          <Button
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages}
          >
            صفحه بعد
          </Button>
        </HStack>
      </>
    );
  } else {
    return (
      <AccordionLists
        mdCancelHandler={mdCancelHandler}
        clientData={clientData}
      />
    );
  }
};

export default Clients;
