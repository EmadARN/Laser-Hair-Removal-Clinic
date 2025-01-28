const styles = {
  container: {
    width: "100%",
    height: "300px",
    overflow: "hidden",
    position: "relative",
    cursor: "col-resize",
  },

  imageSecond: {
    position: "absolute",
  },
  handlebar: {
    height: "5",
    width: "5",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "-2.5",
    backgroundColor: "white",
    zIndex: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px -1px 0px 0px rgba(255, 255, 255, 0.25)",
  },
  sliderLine: {
    height: "full",
    width: "1px",
    position: "absolute",
    top: "0",
    zIndex: 30,
    background:
      "linear-gradient(to bottom, transparent 5%, rgba(75, 85, 99, 0.5) 50%, transparent 95%)",
  },
};

export default styles;
