// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useCookies } from "react-cookie";
// import { useCustomToast } from "@/utils/useCustomToast ";
// import StepperPrototype from "../stepper";
// import {
//   getreserveInformation,
//   getTimeList,
//   postAddTime,
// } from "@/features/customerDashboard/customerThunks";
// import { Flex } from "@chakra-ui/react";
// import CustomButton from "@/Common/customeButton/CustomeButton";
// import Loading from "@/Common/loading";
// import Date from "./ui/Date";
// import TitleUserDashboard from "../shared/TitleUserDashboard";

// const DateTime = ({ slug }) => {
//   const { showToast } = useCustomToast();
//   const [cookies] = useCookies(["auth_token"]);
//   const [selectedDateId, setSelectedDateId] = useState(null);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [storedTimeList, setStoredTimeList] = useState(() => {
//     const savedTimeList = localStorage.getItem("timeList");
//     return savedTimeList ? JSON.parse(savedTimeList) : null;
//   });
//   const dispatch = useDispatch();
//   const { userReserveId, timeList, loading, error, reserveInformation } =
//     useSelector((store) => store.customerDashboard);

//   const tokenAuth = cookies.auth_token;
//   const reserveId = localStorage.getItem("reserveId");

//   // ذخیره‌سازی اطلاعات در localStorage هنگام تغییر زمان‌بندی یا reserveId
//   useEffect(() => {
//     if (timeList) {
//       localStorage.setItem("timeList", JSON.stringify(timeList));
//     }
//     if (userReserveId) {
//       localStorage.setItem("reserveId", userReserveId);
//     }
//   }, [timeList, userReserveId]);

//   // بازیابی اطلاعات هنگام بارگذاری کامپوننت
//   useEffect(() => {
//     if (reserveId && tokenAuth) {
//       dispatch(getTimeList({ tokenAuth, reserveId }));
//       dispatch(getreserveInformation({ tokenAuth, reserveId }));
//     }
//   }, [reserveId, tokenAuth, dispatch]);

//   const submitHandler = async () => {
//     const result = await dispatch(
//       postAddTime({ tokenAuth, selectedDateId, selectedSlot })
//     );

//     if (result.meta.requestStatus === "fulfilled") {
//       showToast({
//         title: "موفقیت‌آمیز",
//         description: "اطلاعات با موفقیت ثبت شد",
//         status: "success",
//       });
//     } else {
//       showToast({
//         title: "خطا",
//         description: "خطا در ثبت اطلاعات",
//         status: "error",
//       });
//     }
//   };

//   return (
//     <>
//       <StepperPrototype currentStep={3} />
//       <TitleUserDashboard />
//       <Date
//         error={error}
//         loading={loading}
//         reserveInformation={reserveInformation}
//         timeList={timeList || storedTimeList}
//         selectedDateId={selectedDateId}
//         setSelectedDateId={setSelectedDateId}
//         selectedSlot={selectedSlot}
//         setSelectedSlot={setSelectedSlot}
//       />
//       <Flex
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           p: 3,
//         }}
//       >
//         <CustomButton slug={slug} onClick={submitHandler} w="30%">
//           {loading ? (
//             <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
//           ) : (
//             "ادامه"
//           )}{" "}
//         </CustomButton>
//       </Flex>
//     </>
//   );
// };

// export default DateTime;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper";
import {
  getreserveInformation,
  getTimeList,
  postAddTime,
} from "@/features/customerDashboard/customerThunks";
import { Flex } from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import Date from "./ui/Date";
import TitleUserDashboard from "../shared/TitleUserDashboard";
import { useCustomToast } from "@/utils/useCustomToast ";

const DateTime = ({ slug }) => {
  const { showToast } = useCustomToast();
  const [cookies] = useCookies(["auth_token"]);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [storedTimeList, setStoredTimeList] = useState(() => {
    const savedTimeList = localStorage.getItem("timeList");
    return savedTimeList ? JSON.parse(savedTimeList) : null;
  });

  const dispatch = useDispatch();
  const { userReserveId, timeList, loading, error, reserveInformation } =
    useSelector((store) => store.customerDashboard);

  const tokenAuth = cookies.auth_token;

  // ذخیره‌سازی اطلاعات در localStorage
  useEffect(() => {
    if (timeList) {
      localStorage.setItem("timeList", JSON.stringify(timeList));
      setStoredTimeList(timeList);
    }
    if (userReserveId) {
      localStorage.setItem("reserveId", userReserveId);
    }
  }, [timeList, userReserveId]);

  // بازیابی اطلاعات
  useEffect(() => {
    const savedReserveId = localStorage.getItem("reserveId");
    if (savedReserveId && tokenAuth) {
      dispatch(getTimeList({ tokenAuth, reserveId: savedReserveId }));
      dispatch(getreserveInformation({ tokenAuth, reserveId: savedReserveId }));
    }
  }, [tokenAuth, dispatch]);

  // نمایش خطا در صورت وجود
  useEffect(() => {
    if (error) {
      showToast({
        title: "خطا",
        description: "خطا در بارگذاری اطلاعات",
        status: "error",
      });
    }
  }, [error, showToast]);

  const submitHandler = async () => {
    const result = await dispatch(
      postAddTime({ tokenAuth, selectedDateId, selectedSlot })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: "موفقیت‌آمیز",
        description: "اطلاعات با موفقیت ثبت شد",
        status: "success",
      });
    } else {
      showToast({
        title: "خطا",
        description: "خطا در ثبت اطلاعات",
        status: "error",
      });
    }
  };

  // نمایش لودینگ تا زمانی که داده‌ها بارگذاری شوند
  if (loading || !timeList || !reserveInformation) {
    return <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />;
  }

  return (
    <>
      <StepperPrototype currentStep={3} />
      <TitleUserDashboard />
      <Date
        error={error}
        loading={loading}
        reserveInformation={reserveInformation || {}}
        timeList={timeList || storedTimeList || []}
        selectedDateId={selectedDateId}
        setSelectedDateId={setSelectedDateId}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
      <Flex
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          p: 3,
        }}
      >
        <CustomButton slug={slug} onClick={submitHandler} w="30%">
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
          ) : (
            "ادامه"
          )}
        </CustomButton>
      </Flex>
    </>
  );
};

export default DateTime;
