import { postAsyncLogin, resetAuthState } from "@/features/signin/authSlice";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

const useLoginAdminRecptionHooks = (dispatch) => {
  const { userType } = useSelector((store) => store.signin);
  console.log("uu", userType);

  const [cookies, setCookie] = useCookies([
    "auth_Admin_token",
    "auth_Employee_token",
  ]);

  const login = async (input, isAdmin) => {
    dispatch(resetAuthState());
    const result = await dispatch(postAsyncLogin(input));
    if (result.meta.requestStatus === "fulfilled") {
      if (
        result.payload.token &&
        (isAdmin
          ? result.payload.user_type === "a"
          : ["o", "r"].includes(result.payload.user_type))
      ) {
        const tokenName = isAdmin ? "auth_Admin_token" : "auth_Employee_token";
        setCookie(tokenName, result.payload.token, { path: "/" });
        return { success: true, userType };
      }
    }
    return { success: false };
  };

  return login;
};
export default useLoginAdminRecptionHooks;
