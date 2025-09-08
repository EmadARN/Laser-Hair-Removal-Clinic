import React, { useEffect, useState } from "react";
import { Box, Table, Button, HStack, Text } from "@chakra-ui/react";
import Lists from "../shared/Lists";
import AccordionLists from "../shared/AccordionLists";
import SearchComponent from "@/Common/searchInput/SearchInput";
import usePagination from "./logic/usePagination";
import useCutomerInformation from "./logic/useCutomerInformation";
import ReusableSession from "../shared/ReussableSession";
import { RiShieldUserFill } from "react-icons/ri";

const Clients = () => {
  const [step, setStep] = useState(0);
  const [filteredClients, setFilteredClients] = useState([]);
  const [filteredData, setFilteredData] = useState();

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

  // آیا جستجو فعال است؟
  const hasSearch = filteredData !== undefined;
  const dataToShow = hasSearch ? filteredData : currentClients;

  // بررسی وضعیت خالی بودن داده برای جدول
  const isTableEmpty =
    !loading && !error && (!dataToShow || dataToShow.length === 0);

  if (step === 0) {
    if (isTableEmpty) {
      return (
        <ReusableSession
          text="مراجعینی برای نمایش وجود ندارد"
          icon={<RiShieldUserFill />}
        />
      );
    }

    return (
      <Box width={"100%"} minWidth={"500px"}>
        {/* سرچ */}
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

        {/* جدول */}
        <Box
          width={"100%"}
          minWidth={"500px"}
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
          >
            {dataToShow.map((item, index) => (
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
        </Box>

        {/* pagination */}
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
      </Box>
    );
  }

  // حالت آکاردئون
  const isAccordionEmpty =
    !loading &&
    !error &&
    (!clientInformation?.reserve_list ||
      clientInformation.reserve_list.length === 0);

  if (isAccordionEmpty) {
    return (
      <ReusableSession
        text="اطلاعات رزرو برای این مراجع یافت نشد"
        icon={<RiShieldUserFill />}
      />
    );
  }

  return (
    <AccordionLists
      mdCancelHandler={mdCancelHandler}
      clientData={clientData}
      clientInformation={clientInformation.reserve_list}
    />
  );
};

export default Clients;
