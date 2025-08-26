import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { RiShieldUserFill } from "react-icons/ri";
import AdminHeader from "../shared/AdminHeader";
import Lists from "../shared/Lists";
import ReusableSession from "../shared/ReussableSession";
import Loading from "@/Common/loading";
import UserForm from "./ui/UserForm";
import {
  BodyContent,
  FooterContent,
  HeaderContent,
} from "./ui/attentionDetailsModal";
import useEmployees from "./logic/useEmployees";

const Empolyees = () => {
  const { loading, error, users, token, type } = useEmployees();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text color="red.500">خطا رخ داده لطفا ریفرش کنید{error}</Text>;
  }

  return (
    <Box width={"100%"} minWidth={"500px"}>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="کارمندان"
          btnValue="افزودن کارمند جدید"
          isEdit={false}
          icon={<RiShieldUserFill />}
          ModalBodyContent={{
            body: (
              <UserForm
                userToEdit={null}
                isEdit={false}
                users={users}
                token={token}
              />
            ),
          }}
          iconBtnDisply="none"
        />
      </Box>
      <Box sx={{ mt: 8 }} overflowX="auto">
        {users.user_list && users.user_list.length > 0 ? (
          <Box>
            {users.user_list.map((user, index) => {
              const userType = type(user);
              return (
                <Box key={index} w="100%">
                  <Lists
                    firstArea={user.username}
                    secondArea={user.name + " " + user.last_name}
                    thirdArea={userType}
                    leftArrowDisplay="none"
                    isDelete={true}
                    ModalBodyContent={{
                      body: (
                        <UserForm
                          userToEdit={user}
                          isEdit={true}
                          users={users}
                          token={token}
                        />
                      ),
                    }}
                    headerContentValue="ویرایش کارمند"
                    HeaderContent={<HeaderContent />}
                    BodyContent={<BodyContent />}
                    FooterContent={<FooterContent user={user} token={token} />}
                    iconBtnDisply="none"
                  />
                </Box>
              );
            })}
          </Box>
        ) : (
          <ReusableSession
            text="کاربری وجود ندارد"
            icon={<RiShieldUserFill />}
          />
        )}
      </Box>
    </Box>
  );
};

export default Empolyees;
