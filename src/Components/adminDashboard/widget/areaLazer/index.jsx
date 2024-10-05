import React, { useEffect, useState } from "react";
import Lists from "../../common/Lists";

import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import { Box, Spinner, Text } from "@chakra-ui/react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { BiTargetLock } from "react-icons/bi";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getLazerAreas } from "@/features/adminDashboard/adminDashboardSlice";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";

const AreaLazer = () => {

  const { token, AreaLaser, loading, error } = useSelector(
    (store) => store.adminDashboard
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getLazerAreas({ token }));
   
    }
  }, [dispatch, token]);

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
        {AreaLaser.all_laser_area_object &&
        AreaLaser.all_laser_area_object.first_type.length > 0 ? (
          AreaLaser.all_laser_area_object.first_type.map((item, index) => {
           
            
         return(
         
            <Lists
              key={index}
              firstArea={item.label}
              secondArea={item.price}
              thirdArea={item.operate_time}
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
         )
          })
        ) : (
          <Text>هیج ناحیه ای اضافه نشده</Text>
        )}
      </Box>
    </>
  );
};

export default AreaLazer;
