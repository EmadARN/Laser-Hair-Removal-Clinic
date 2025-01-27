import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { RiHome5Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { cancelReserve } from "@/features/customerDashboard/customerThunks";

const TitleUserDashboard = () => {
  const router = useRouter();
  const reserveId = localStorage.getItem("reserveId");
  const [cookies] = useCookies(["auth_token"]);
  const tokenAuth = cookies.auth_token;
  const dispatch = useDispatch();
  console.log("dasdad", router.query.dashboardSlug);

  const handleCancelReserve = () => {
    if (router.query.dashboardSlug === "dateTime") {
      dispatch(
        cancelReserve({
          reserve: reserveId,
          cancel_type: "sc",
          sms_status: "جلسه لیزر شما تغییر یافت",
          tokenAuth,
        })
      );
      console.log("JHello");
    }
  };
  const handleBack = () => {
    handleCancelReserve(); // دیسپچ هنگام کلیک دکمه مرحله قبل
    router.back();
  };

  useEffect(() => {
    const onPopState = () => {
      handleCancelReserve(); // دیسپچ هنگام استفاده از دکمه Back مرورگر
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [router.query.dashboardSlug,handleCancelReserve]);

  return (
    <Flex sx={{ justifyContent: "space-between", bgColor: "#1111", w: "full" }}>
      <Text
        as="button"
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        onClick={() => router.push("/")}
      >
        <span>
          <RiHome5Line size="24px" />
        </span>
        <Link href={"/"}> بازگشت به خانه</Link>
      </Text>
      <Text
        as="button"
        sx={{ display: "flex", alignItems: "center", position: "relative" }}
        onClick={handleBack}
      >
        مرحله قبل
        <span style={{ paddingTop: "5px" }}>
          <IoIosArrowRoundBack size="24px" />
        </span>
      </Text>
    </Flex>
  );
};

export default TitleUserDashboard;
