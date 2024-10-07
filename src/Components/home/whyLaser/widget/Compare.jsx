import React, { useState, useRef, useCallback, useEffect } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";

export const Compare = ({
  firstImage,
  secondImage,
  className,
  initialSliderPercentage = 50,
  showHandlebar = true,
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [direction, setDirection] = useState(1); // 1 برای راست، -1 برای چپ
  const sliderRef = useRef(null);
  const controls = useAnimation();

  const animateSlider = (targetPercent) => {
    controls.start({ x: `${targetPercent}%` });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderXPercent((prev) => {
        const newPercent = prev + direction; // حرکت به سمت راست یا چپ
        if (newPercent >= 100) {
          setDirection(-1); // اگر به 100 برسد، به چپ حرکت کن
          return 100;
        } else if (newPercent <= 0) {
          setDirection(1); // اگر به 0 برسد، به راست حرکت کن
          return 0;
        }
        animateSlider(newPercent);
        return newPercent;
      });
    }, 30); // هر 30 میلی ثانیه به روز رسانی می‌شود

    return () => clearInterval(interval); // پاک کردن interval در هنگام unmount
  }, [controls, direction]);

  const handleMouseMove = useCallback((clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderXPercent(Math.max(0, Math.min(100, percent)));
    animateSlider(percent);
    setDirection(0); // توقف حرکت خودکار هنگام حرکت ماوس
  }, []);

  const handleMouseLeave = () => {
    setDirection(1); // شروع مجدد حرکت خودکار هنگام ترک ماوس
  };

  return (
    <Box
      ref={sliderRef}
      className={className}
      position="relative"
      cursor="col-resize"
      onMouseMove={(e) => handleMouseMove(e.clientX)}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: "100%",
        height: "300px",
        overflow: "hidden",
      }}
    >
      {/* تصویر اول */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="full"
        height={{ base: "31.3vh", md: "50vh" }}
        sx={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
      >
        <img
          alt="first image"
          src={firstImage}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "lg",
            position: "absolute",
            top: "10px",
            left: 0,
          }}
          draggable={false}
        />
      </Box>

      {/* تصویر دوم */}
      <Box
        position="absolute"
        top="10px"
        left="0"
        width="full"
        height={{ base: "30vh", md: "50vh" }}
        sx={{ clipPath: `inset(0 0 0 ${sliderXPercent}%)` }}
      >
        <img
          alt="second image"
          src={secondImage}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "lg",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          draggable={false}
        />
      </Box>

      {/* دسته */}
      <motion.div
        sx={{
          height: "full",
          width: "1px",
          position: "absolute",
          top: "0",
          left: `${sliderXPercent}%`,
          zIndex: 30,
          background:
            "linear-gradient(to bottom, transparent 5%, rgba(75, 85, 99, 0.5) 50%, transparent 95%)",
        }}
        animate={controls}
      >
        {showHandlebar && (
          <Box
            sx={{
              height: "5",
              width: "5",
              borderRadius: "md",
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
            }}
          >
            <Icon as={GiResize} boxSize={4} color="black" />
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default Compare;
