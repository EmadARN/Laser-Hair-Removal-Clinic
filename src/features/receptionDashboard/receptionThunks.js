import api from "@/services/apiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const addCustomerWithOutTime = createAsyncThunk(
//   "receptionDashboard/addCustomerWithOutTime",
//   async (payload, { rejectWithValue }) => {
//     console.log("patientwidthouttime", payload);

//     try {
//       const { data } = await api.post(
//         "Core/add/customer/information/",
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${payload.auth_Employee_token}`,
//           },
//         }
//       );
//       console.log("cuatomer sussess", data);

//       return data;
//     } catch (error) {
//       console.log("customer error", error);
//     }
//   }
// );

// export const getCutomerList = createAsyncThunk(
//   "receptionDashboard/getCutomerList",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await api.get("/Core/customer/list/", {
//         headers: {
//           Authorization: `Bearer ${payload.auth_Employee_token}`,
//         },
//       });
//       return data;
//       console.log("customer list", data);
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
// );

// export const todayDate = createAsyncThunk(
//   "receptionDashboard/todayDate",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await api.post(
//         "/Reserve/reserve/list/",
//         {
//           from_: "1403/8/28",
//           to: "1403/8/30",
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${payload.auth_Employee_token}`,
//           },
//         }
//       );
//       return data;
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
// );

// export const cancelReserve = createAsyncThunk(
//   "receptionDashboard/cancelReserve",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await api.post(
//         "/Reserve/cancel/reserve/",
//         {
//           reserve: payload.reserve,
//           cancel_type: payload.cancel_type,
//           sms_status: payload.sms_status,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${payload.auth_Employee_token}`,
//           },
//         }
//       );
//       return data;
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
// );

// export const getOperatorSchedule = createAsyncThunk(
//   "receptionDashboard/getOperatorSchedule",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await api.get("/Reception/operator/", {
//         headers: {
//           Authorization: `Bearer ${payload.auth_Employee_token}`,
//         },
//       });
//       return data;
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
// );

// export const enterExitedOprators = createAsyncThunk(
//   "receptionDashboard/enterExitedOprators",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await api.post(
//         "/Core/enter/exit/operator/",
//         {
//           username: payload.username,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${payload.auth_Employee_token}`,
//           },
//         }
//       );

//       return data;
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
// );

// export const getLazerAreas = createAsyncThunk(
//   "user/getLazerArea",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await api.get("/Laser/laser/area/list/", {
//         headers: {
//           Authorization: `Bearer ${payload.auth_Employee_token}`,
//         },
//       });
//       return data;
//     } catch (error) {
//       console.log("get lazer area error", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const reservesListPerson = createAsyncThunk(
//   "user/reservesListPerson",
//   async (payload, { rejectWithValue }) => {
//     console.log("payload success", payload);
//     try {
//       const { data } = await api.post(
//         "/Reserve/user/reserve/list/",
//         { username: payload.username },
//         {
//           headers: {
//             Authorization: `Bearer ${payload.auth_Employee_token}`,
//           },
//         }
//       );
//       console.log("reservesListPerson", data);

//       return data;
//     } catch (error) {
//       console.log("reservesListPerson", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const addcharge = createAsyncThunk(
//   "user/addcharge",
//   async (payload, { rejectWithValue }) => {
//     console.log("payload success", payload);
//     try {
//       const { data } = await api.post(
//         "/Core/customer/add/to/charge/",
//         { username: payload.username },
//         {
//           headers: {
//             Authorization: `Bearer ${payload.auth_Employee_token}`,
//           },
//         }
//       );
//       console.log("addcharge", data);

//       return data;
//     } catch (error) {
//       console.log("addcharge", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const multiplePayment = createAsyncThunk(
//   "user/multiplePayment",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await api.post(
//         "/Payment/multiple/payment/",
//         {
//           reserve: payload.reserve,
//           payment_list: [payload.paymentList],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${payload.auth_Employee_token}`,
//           },
//         }
//       );

//       console.log("payment success", data);
//       return data;
//     } catch (error) {
//       console.log("payment error", error);
//     }
//   }
// );

// Async Thunks
export const addCustomerWithOutTime = createAsyncThunk(
  "receptionDashboard/addCustomerWithOutTime",
  async (payload, { rejectWithValue }) => {
    console.log("payload", payload);

    try {
      const { data } = await api.post(
        "Core/add/customer/information/",
        payload,

        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("postCustomerInformation", data);
      return data;
    } catch (error) {
      console.log("error payload postCustomerInformation", error);
    }
  }
);
export const addSignupCustomer = createAsyncThunk(
  "receptionDashboard/addSignupCustomer",
  async (payload, { rejectWithValue }) => {
    console.log(payload);

    try {
      const { data } = await api.post("/Core/signup/customer/", payload, {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      console.log("cuatomer sussess", data);

      return data;
    } catch (error) {
      console.log("customer error", error);
    }
  }
);

export const ReserveReceptionWithOutTime = createAsyncThunk(
  "receptionDashboard/ReserveReceptionWithOutTime",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "Reserve/reception/add/reserve/",
        { username: payload.usernameValue },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("cuatomer sussess", data);

      return data;
    } catch (error) {
      console.log("customer error", error);
    }
  }
);

export const getCutomerList = createAsyncThunk(
  "receptionDashboard/getCutomerList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/customer/list/", {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const todayDate = createAsyncThunk(
  "receptionDashboard/todayDate",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Reserve/reserve/list/",
        {
          from_: "",
          to: "",
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log(data);

      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const cancelReserve = createAsyncThunk(
  "receptionDashboard/cancelReserve",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "Reserve/cancel/reserve/",
        {
          reserve: payload.reserve,
          cancel_type: payload.cancel_type,
          sms_status: payload.sms_status,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("CANCEL", data);

      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getOperatorSchedule = createAsyncThunk(
  "receptionDashboard/getOperatorSchedule",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Reception/operator/", {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const enterExitedOprators = createAsyncThunk(
  "receptionDashboard/enterExitedOprators",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Core/enter/exit/operator/",
        {
          username: payload.username,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("huhu", data);

      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getLazerAreas = createAsyncThunk(
  "user/getLazerArea",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Laser/laser/area/list/", {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("get lazer area error", error);
      return rejectWithValue(error.message);
    }
  }
);

export const reservesListPerson = createAsyncThunk(
  "user/reservesListPerson",
  async (payload, { rejectWithValue }) => {
    console.log("payload success", payload);
    try {
      const { data } = await api.post(
        "/Reserve/user/reserve/list/",
        { username: payload.username },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("reservesListPerson", data);

      return data;
    } catch (error) {
      console.log("reservesListPerson", error);
      return rejectWithValue(error.message);
    }
  }
);
export const addcharge = createAsyncThunk(
  "user/addcharge",
  async (payload, { rejectWithValue }) => {
    console.log("payload success", payload);
    try {
      const { data } = await api.post(
        "/Core/customer/add/to/charge/",
        { username: payload.username },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("addcharge", data);

      return data;
    } catch (error) {
      console.log("addcharge", error);
      return rejectWithValue(error.message);
    }
  }
);

export const multiplePayment = createAsyncThunk(
  "user/multiplePayment",
  async (
    // { reservId, totalPrice, paymentType, auth_Employee_token },
    payload,
    { rejectWithValue }
  ) => {
    console.log("multiple payment payload", payload);

    try {
      const { data } = await api.post(
        "/Payment/multiple/payment/",
        {
          reserve: payload.reservId,
          payment_list: payload.payment_list,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );

      console.log("payment success", data);
      return data;
    } catch (error) {
      console.log("payment error", error);
    }
  }
);

export const editLazerArea = createAsyncThunk(
  "reseption/editLazerArea",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Reserve/edit/reserve/laser/area/",
        {
          reserve: payload.idKeeper,
          laser_area_list: payload.laserAreaList,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("edit success", data);
      return data;
    } catch (err) {
      console.log("edit error", err);
    }
  }
);
