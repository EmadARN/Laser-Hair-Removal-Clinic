import React, { useEffect, useState } from "react";
import { Box, Table, Button, HStack, Text } from "@chakra-ui/react";
import Lists from "../shared/Lists";
import AccordionLists from "../shared/AccordionLists";
import SearchComponent from "@/Common/searchInput/SearchInput";
import usePagination from "./logic/usePagination";
import useCutomerInformation from "./logic/useCutomerInformation";
import { RiShieldUserFill } from "react-icons/ri";
import ReusableSession from "../shared/ReussableSession";

const Clients = () => {
  const [step, setStep] = useState(0);
  const [filteredClients, setFilteredClients] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const {
    currentPage,
    handlePrevPage,
    handleNextPage,
    totalPages,
    currentClients,
  } = usePagination(filteredClients);

  const {
    loading,
    error,
    customerListAdmin,
    clientInformation,
    handleRowClick,
    clientData,
    mdCancelHandler,
  } = useCutomerInformation(setStep);

  useEffect(() => {
    if (customerListAdmin?.customer_list) {
      setFilteredClients(customerListAdmin.customer_list);
    }
  }, [customerListAdmin]);

  if (step === 0) {
    const hasFilteredData = filteredData && filteredData.length > 0;
    const hasCurrentClients =
      !loading &&
      !error &&
      Array.isArray(currentClients) &&
      currentClients.length > 0;

    const dataToRender = hasFilteredData
      ? filteredData
      : hasCurrentClients
      ? currentClients
      : [];

    return (
      <Box width={"100%"} minWidth={"500px"}>
        {/* Search Component */}
        <Box
          sx={{ py: { base: 4, md: 6 }, px: { base: 2, md: 4 } }}
          width={"95%"}
        >
          <SearchComponent
            data={customerListAdmin?.customer_list || []}
            filterKeys={["name", "last_name"]}
            placeholder="جستجو در بین مراجعین"
            size="lg"
            datas={currentClients}
            onSearch={setFilteredData}
          />
        </Box>

        {/* Main Table / ReusableSession */}
        <Box
          width={"100%"}
          minWidth={"500px"}
          display={"flex"}
          justifyContent={"center"}
          px={{ base: 2, md: 4 }}
        >
          {loading ? (
            <Text>در حال بارگذاری...</Text>
          ) : error ? (
            <Text>خطا در بارگذاری داده‌ها</Text>
          ) : dataToRender.length > 0 ? (
            <Table mt={6} cursor="pointer" width="100%" size="sm" dir="rtl">
              {dataToRender.map((item, index) => (
                <Box
                  key={index}
                  onClick={() => handleRowClick(item)}
                  width={"100%"}
                >
                  <Lists
                    firstArea={item.name + " " + item.last_name}
                    editDeleteDisplay="none"
                    leftArrowDisplay="flex"
                  />
                </Box>
              ))}
            </Table>
          ) : (
            <ReusableSession
              text="مراجعینی برای نمایش وجود ندارد"
              icon={<RiShieldUserFill />}
            />
          )}
        </Box>

        {/* Pagination */}
        {dataToRender.length > 0 && (
          <HStack mt={4} justifyContent="end" ml={4}>
            <Button onClick={handlePrevPage} isDisabled={currentPage === 1}>
              قبل
            </Button>
            <Text>{`${currentPage} از ${totalPages}`}</Text>
            <Button
              onClick={handleNextPage}
              isDisabled={currentPage === totalPages}
            >
              بعد
            </Button>
          </HStack>
        )}
      </Box>
    );
  } else {
    return (
      <AccordionLists
        mdCancelHandler={mdCancelHandler}
        clientData={clientData}
        clientInformation={clientInformation.reserve_list}
      />
    );
  }
};

export default Clients;
