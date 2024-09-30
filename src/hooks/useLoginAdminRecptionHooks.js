import { postAsyncLogin } from "@/features/adminDashboard/adminDashboardSlice";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

const useLoginAdminRecptionHooks = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies([
    "auth_Admin_token",
    "auth_Employee_token",
  ]);

  const login = async (input, isAdmin) => {
    const result = await dispatch(postAsyncLogin(input));
    if (result.meta.requestStatus === "fulfilled") {
      const receivedToken = result.payload.token;
      const userType = result.payload.user_type;

      if (
        receivedToken &&
        (isAdmin ? userType === "a" : ["o", "r"].includes(userType))
      ) {
        const tokenName = isAdmin ? "auth_Admin_token" : "auth_Employee_token";
        setCookie(tokenName, receivedToken, { path: "/" });
        return { success: true, userType };
      }
    }
    return { success: false };
  };

  return login;
};
export default useLoginAdminRecptionHooks;
