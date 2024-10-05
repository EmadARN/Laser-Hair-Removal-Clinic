import React, { useEffect } from "react";
import Lists from "../../common/Lists";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import { Box, Spinner, Text } from "@chakra-ui/react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { BiTargetLock } from "react-icons/bi";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getLazerAreas } from "@/features/adminDashboard/adminDashboardSlice";

const AreaLazer = () => {
const {token,AreaLaser,loading,error} = useSelector((store)=>store.adminDashboard)
  const dispatch = useDispatch();
    useEffect(() => {
    // اگر توکن وجود دارد، اکشن برای بارگذاری لیست کاربران را فراخوانی کنید
   
      dispatch(getLazerAreas({token}));
  
  }, [dispatch]);

  // مدیریت وضعیت بارگذاری و خطا
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text color="red.500">خطا در بارگذاری داده‌ها: {error}</Text>;
  }




  
  return (
    <>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="نواحی لیزر"
          btnValue="افزودن ناحیه جدید"
          icon={<BiTargetLock />}
          ModalBodyContent={{ body: <ModalBodyContent isEdit={false} /> }}
          iconBtnDisply="none"
        />
      </Box>
      <Box></Box>
      <Box sx={{ mt: 8 }}>
        {AreaLaser.length > 0 &&
          AreaLaser.map((item) => {
            const laserAreas = item.all_laser_area_object;
            return laserAreas && laserAreas.second_type
              ? laserAreas.second_type.map((areaItem, index) => (
                  <Lists
                    key={index}
                    firstArea={areaItem.value}
                    secondArea={areaItem.price}
                    thirdArea={areaItem.operate_time}
                    display="none"
                    ModalBodyContent={{
                      body: <ModalBodyContent isEdit={true} />,
                    }}
                    HeaderContent={HeaderContent}
                    headerContentValue="ویرایش ناحیه "
                    BodyContent={BodyContent}
                    FooterContent={FooterContent}
                    iconBtnDisply="none"
                  />
                ))
              : null;
          })}
      </Box>
    </>
  );
};

export default AreaLazer;
