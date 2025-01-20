import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BiTargetLock } from "react-icons/bi";
import AdminHeader from "../shared/AdminHeader";
import Lists from "../shared/Lists";
import ReusableSession from "../shared/ReussableSession";
import Loading from "@/Common/loading";
import {
  BodyContent,
  FooterContent,
  HeaderContent,
} from "./ui/attentionDetailsModal";
import AreaLazerForm from "./ui/AreaLazerForm";
import useAreaLazer from "./logic/useAreaLazer";
import { formatNumber } from "@/utils/formatNumber";

const AreaLazer = () => {
  const { loading, error, AreaLaser, token } = useAreaLazer();

  // مدیریت وضعیت بارگذاری و خطا
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text color="red.500"> خطا رخ داده لطفا ریفرش کنید: {error}</Text>;
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
              <Box width={{ base: "110vw", md: "100%" }} key={index}>
                <Lists
                  leftArrowDisplay="none"
                  key={index}
                  firstArea={item.label}
                  secondArea={formatNumber(item.price)}
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
              </Box>
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
