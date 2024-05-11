import { Box, Text } from "@chakra-ui/react";
import Title from "@/common/title/Title";
import { useEffect, useState } from "react";

function Wallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const updateBalance = () => {
      const newBalance = Math.random() * 1000 - 500;
      setBalance(newBalance);
    };

    updateBalance();

    const intervalId = setInterval(updateBalance, 50000);

    return () => clearInterval(intervalId);
  }, []);

  const balanceColor = balance > 0 ? "green" : "red";
  return (
    <>
      <Box w={"90%"} bgColor={"#f1f1f1"} borderRadius={"25px"} m={"0 auto"}>
        <Title inTitle={"موجودی کیف پول شما"} />
        <Box pb="5" m={"0 auto"} fontSize="30px" textAlign="center" width="90%">
          <Text style={{ color: balanceColor }}>
            موجودی کیف پول به تومان:
            <br /> {balance.toFixed(5)}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Wallet;
