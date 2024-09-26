import { Button } from "@chakra-ui/react";

const CustomButton = ({ clicHandler, btnClick }) => {
  return (
    <Button
      onClick={clicHandler}
      sx={{
        w: "50%",
        m: "auto",
        mt: 10,
        alignItems: "center",
        backgroundColor: "#FCFCFD",
        borderRadius: "4px",
        borderWidth: 0,
        boxShadow:
          "rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
        color: "#36395A",
        cursor: "pointer",
        display: "inline-flex",
        height: "48px",
        justifyContent: "center",
        transition: "box-shadow .15s, transform .15s",
        whiteSpace: "nowrap",
        fontSize: "16px",
        _hover: {
          boxShadow:
            "rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
        },
        _active: {
          boxShadow: "#D6D6E7 0 3px 7px inset",
          transform: "translateY(2px)",
        },
      }}
    >
      {btnClick ? "ورود کارمند" : "ورود مدیر"}
    </Button>
  );
};

export default CustomButton;
