import React, { useEffect, useState } from "react";
import { Box, Table, Button, HStack, Text } from "@chakra-ui/react";
import Lists from "../shared/Lists";
import AccordionLists from "../shared/AccordionLists";
import SearchComponent from "@/Common/searchInput/SearchInput";
import usePagination from "./logic/usePagination";
import useCutomerInformation from "./logic/useCutomerInformation";

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

  if (step === 0) {
    return (
      <Box width={"100%"} minWidth={"500px"}>
        <Box sx={{ py: { base: 4, md: 6 }, px: { base: 2, md: 4 } }}width={"95%"}>
          <SearchComponent
            data={customerListAdmin?.customer_list || []}
            filterKeys={["name", "last_name"]}
            placeholder="جستجو در بین مراجعین"
            size="lg"
            datas={currentClients}
            onSearch={setFilteredData}
          />
        </Box>
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
            {filteredData && filteredData.length > 0
              ? filteredData.map((searchitem, index) => (
                  <Box
                    key={index}
                    onClick={() => handleRowClick(searchitem)}
                    width={"100%"}
                  >
                    <Lists
                      firstArea={searchitem.name + " " + searchitem.last_name}
                      editDeleteDisplay="none"
                      leftArrowDisplay="flex"
                    />
                  </Box>
                ))
              : !loading && !error && Array.isArray(currentClients)
              ? currentClients.map((item, index) => (
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
                ))
              : error
              ? null
              : null}
          </Table>
        </Box>
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
