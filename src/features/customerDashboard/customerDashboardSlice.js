import api from "@/services/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = "";
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

// Async Thunks
export const postCustomerInformation = createAsyncThunk(
  "customerDashboard/postCustomerInformation",
  async (payload, { rejectWithValue }) => {
    console.log("payload", payload);

    try {
      const { data } = await api.post(
        "Core/add/customer/information/",
        payload,

        {
          headers: {
            Authorization: `Bearer ${payload.auth_token}`,
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

export const getLazerAreaList = createAsyncThunk(
  "customerDashboard/getLazerAreaList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Laser/laser/area/list/", {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      console.log("getLazerAreaList", data);
      return data;
    } catch (error) {
      console.log("error payload getLazerAreaList", error);
    }
  }
);
export const postLazerAreaList = createAsyncThunk(
  "customerDashboard/postLazerAreaList",
  async (payload, { rejectWithValue }) => {
    console.log("payload", payload);

    try {
      const { data } = await api.post(
        "/Reserve/client/pending/reserve/",
        {
          laser_area_list: payload.reserveId,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      console.log("postLazerAreaList", data);
      return data;
    } catch (error) {
      console.log("error payload postLazerAreaList", error);
    }
  }
);
export const getreserveInformation = createAsyncThunk(
  "customerDashboard/getreserveInformation",
  async (payload, { rejectWithValue }) => {
    console.log("payload:", payload);

    try {
      const { data } = await api.get(
        `/Reserve/reserve/information/${payload.reserveId}/`,
        {
          headers: {
            Authorization: `Bearer ${payload.tokenAuth}`,
          },
        }
      );
      console.log("getreserveInformation", data);
      return data;
    } catch (error) {
      console.log("error payload getreserveInformation", error);
    }
  }
);
export const getTimeList = createAsyncThunk(
  "customerDashboard/getTimeList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `Reserve/time/list/${payload.reserveId}/`,
        {
          headers: {
            Authorization: `Bearer ${payload.tokenAuth}`,
          },
        }
      );
      console.log("getTimeList", data);
      return data;
    } catch (error) {
      console.log("error payload getTimeList", error);
    }
  }
);

export const postAddTime = createAsyncThunk(
  "customerDashboard/postAddTime",
  async (payload, { rejectWithValue }) => {
    console.log("payload", payload);

    try {
      const { data } = await api.post(
        "/Reserve/client/add/time/",
        {
          date: payload.selectedDateId,
          time_range: payload.selectedSlot,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.tokenAuth}`,
          },
        }
      );
      console.log("postAddTime", data);
      return data;
    } catch (error) {
      console.log("error payload postAddTime", error);
    }
  }
);

export const confirmInfo = createAsyncThunk(
  "customerDashboard/confirmInfo",
  async (payload, { rejectWithValue }) => {
    console.log("confirminfp", payload);
    try {
      const { data } = await api.post(
        "Core/customer/information/",
        { username: payload.username },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );

      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error payload confirm info", error);
    }
  }
);
export const getCutomerList = createAsyncThunk(
  "receptionDashboard/getCutomerList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/customer/list/", {
        headers: {
          Authorization: `Bearer ${payload.auth_token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("customer list error", error);
    }
  }
);

export const getAsyncUserName = createAsyncThunk(
  "admin/getAsyncUserName",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/get/username/", {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
// Initial State
const initialState = {
  loading: false,
  error: "",
  areas: [],
  userReserveId: "",
  reserveInformation: [],
  timeList: [],
  confrimInfoDetail: [],
  userNames: "",
  customerList: [],
};

const customerDashboardSlice = createSlice({
  name: "customerDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Post CustomerInformation
      .addCase(postCustomerInformation.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postCustomerInformation.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(postCustomerInformation.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Fetch laser areas
      .addCase(getLazerAreaList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getLazerAreaList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.areas = action.payload;
      })
      .addCase(getLazerAreaList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Post laser areas
      .addCase(postLazerAreaList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postLazerAreaList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.userReserveId = action.payload.reserve;
      })
      .addCase(postLazerAreaList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Fetch reserveInformation
      .addCase(getreserveInformation.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getreserveInformation.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.reserveInformation = action.payload;
      })
      .addCase(getreserveInformation.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Fetch reserveInformation
      .addCase(getTimeList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getTimeList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.timeList = action.payload;
      })
      .addCase(getTimeList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Post postAddTime
      .addCase(postAddTime.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postAddTime.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(postAddTime.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      //post confirmInfo
      .addCase(confirmInfo.pending, (state) => {
        (state.loading = true), (state.error = "");
      })
      .addCase(confirmInfo.fulfilled, (state, action) => {
        state.confrimInfoDetail = action.payload;
        state.loading = false;
      })
      .addCase(confirmInfo.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      }) // fetch customerList
      .addCase(getCutomerList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCutomerList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getCutomerList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.customerList = action.payload;
      })
      // getAsyncUserName
      .addCase(getAsyncUserName.pending, (state) => {
        handleAsyncState(state, {}, "pending");
      })
      .addCase(getAsyncUserName.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.userNames = action.payload;
      })
      .addCase(getAsyncUserName.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      });
  },
});

export default customerDashboardSlice.reducer;
