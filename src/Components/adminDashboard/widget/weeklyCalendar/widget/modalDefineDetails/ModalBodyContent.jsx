import { Button, Box } from "@chakra-ui/react";
import { AdminTableData } from "../../TablwData";

const ModalBodyContent = ({ setOperatorInfo }) => {
  const buttonHandler = (operator) => {
    setOperatorInfo(operator.id);
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={2} height={"auto"}>
        {AdminTableData.map((operator) => {
          return (
            <>
              <Box m={3} width={"100%"} key={operator.id} display={"block"}>
                <Button onClick={() => buttonHandler(operator)}>
                  {operator.morning_shift}
                </Button>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default ModalBodyContent;
