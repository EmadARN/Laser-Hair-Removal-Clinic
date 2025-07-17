import React, { useState, useRef, useCallback, useEffect } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../style";

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
  }, [controls, direction, animateSlider]);

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
      sx={styles.container}
    >
      {/* تصویر اول */}
      <Box
        position="absolute"
        top="10px"
        left="0"
        width="full"
        height={{ base: "30vh", md: "50vh" }}
        sx={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
      >
        <Image
          alt="first image"
          src={firstImage}
          layout="fill"
          objectFit="cover"
          style={styles.imageFirst}
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
        <Image
          alt="second image"
          layout="fill"
          objectFit="cover"
          src={secondImage}
          style={styles.imageSecond}
          draggable={false}
        />
      </Box>

      {/* دسته */}
      <motion.div
        sx={{
          ...styles.sliderLine,
          left: `${sliderXPercent}%`,
        }}
        animate={controls}
      >
        {showHandlebar && (
          <Box sx={styles.handlebar}>
            <Icon as={GiResize} boxSize={4} color="black" />
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default Compare;
