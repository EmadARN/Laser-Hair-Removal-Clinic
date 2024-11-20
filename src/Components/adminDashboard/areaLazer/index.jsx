import React, { useEffect } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { BiTargetLock } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../shared/AdminHeader";
import AreaLazerForm from "./modal/AreaLazerForm";
import Lists from "../shared/Lists";
import HeaderContent from "./modal/HeaderContent";
import BodyContent from "./modal/BodyContent";
import FooterContent from "./modal/FooterContent";
import ReusableSession from "../shared/ReussableSession";
import { getLazerAreas } from "@/features/adminDashboard/adminThunks";

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
          ModalBodyContent={{
            body: (
              <AreaLazerForm
                areaToEdit={null}
                isEdit={false}
                AreaLaser={AreaLaser}
                token={token}
              />
            ),
          }}
          iconBtnDisply="none"
        />
      </Box>
      <Box></Box>
      <Box sx={{ mt: 8 }}>
        {AreaLaser.all_laser_area_object &&
        AreaLaser.all_laser_area_object.first_type.length > 0 ? (
          AreaLaser.all_laser_area_object.first_type.map((item, index) => {
            return (
              <Lists
                leftArrowDisplay="none"
                key={index}
                firstArea={item.label}
                secondArea={item.price}
                thirdArea={item.operate_time}
                display="none"
                ModalBodyContent={{
                  body: (
                    <AreaLazerForm
                      isEdit={true}
                      areaToEdit={item}
                      AreaLaser={AreaLaser}
                      token={token}
                    />
                  ),
                }}
                headerContentValue="ویرایش ناحیه "
                HeaderContent={<HeaderContent />}
                BodyContent={<BodyContent />}
                FooterContent={<FooterContent item={item} token={token} />}
                iconBtnDisply="none"
              />
            );
          })
        ) : (
          <ReusableSession text="ناحیه ای وجود ندارد" icon={<BiTargetLock />} />
        )}
      </Box>
    </>
  );
};

export default AreaLazer;
