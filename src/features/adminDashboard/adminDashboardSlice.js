import AreaLazer from "@/Components/adminDashboard/widget/areaLazer";
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
export const postAsyncLogin = createAsyncThunk(
  "user/postAsyncLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Core/login/", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAsyncUsersList = createAsyncThunk(
  "admin/getAsyncUsersList",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().adminDashboard;
    try {
      const { data } = await api.get("/Core/user/list/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
export const addAsyncUsers = createAsyncThunk(
  "user/addAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Core/signup/admin/", payload, {
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
export const editAsyncUser = createAsyncThunk(
  "user/editAsyncUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        `/Core/change/user/information/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteAsyncUser = createAsyncThunk(
  "user/deleteAsyncUser",
  async (payload, { getState, rejectWithValue }) => {
    const { token } = getState().adminDashboard;
    try {
      await api.post(
        `/Core/delete/user/`,
        {
          username: payload.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { id: payload.id };
    } catch (error) {
      console.log("delte Err", error);

      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
export const getLazerAreas = createAsyncThunk(
  "user/getLazerArea",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Laser/laser/area/list/", {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("get lazer area error", error);
      return rejectWithValue(error.message);
    }
  }
);
export const addLazerArea = createAsyncThunk(
  "user/addLazerArea",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Laser/add/new/laser/area/", payload, {
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
export const editLazerArea = createAsyncThunk(
  "user/editLazerArea",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Laser/edit/laser/area/", payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      console.log("data", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const settingAsyncChanging = createAsyncThunk(
  "user/settingAsyncChanging",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Setting/change/setting/", payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      console.log("data::", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getSettingInformation = createAsyncThunk(
  "user/getSettingInformation",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Setting/list/", {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      console.log("setting", data);
      return data;
    } catch (error) {
      console.log("setting error", error);
      return rejectWithValue(error.message);
    }
  }
);
export const getAsyncOperatorList = createAsyncThunk(
  "admin/getAsyncOperatorList",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().adminDashboard;
    try {
      const { data } = await api.get("/Core/operator/list/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
export const getAsyncListDateOperator = createAsyncThunk(
  "admin/getAsyncListDateOperator",
  async ({ token, date_year, date_month, date_day }, { rejectWithValue }) => {
    console.log("payloads:::", { date_year, date_month, date_day });
    try {
      const { data } = await api.get(
        `/Admin/operator/program/list/${date_year}/${date_month}/${date_day}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log("getListsError:::", error);

      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
export const operatorProgramList = createAsyncThunk(
  "user/operatorProgramList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Admin/set/operator/program/", payload, {
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
export const fetchWeekData = createAsyncThunk(
  "week/fetchWeekData",
  async (week, { rejectWithValue }) => {
    try {
      const response = await api.get(`/Admin/week/time/${week}/`);
      console.log("fetchWeekData:", response.data);

      return response.data;
    } catch (error) {
      console.log("fetchWeekDataError:", error);

      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  error: "",
  operators: [],
  users: [],
  AreaLaser: [],
  settingInfo: [],
  dateRanges: [],
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  userType: null,
};

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // User login
      .addCase(postAsyncLogin.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(postAsyncLogin.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.token = action.payload.token;
        state.userType = action.payload.user_type;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(postAsyncLogin.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

      // Fetch Users list
      .addCase(getAsyncUsersList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAsyncUsersList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getAsyncUsersList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users = action.payload;
      })

      // Add new user
      .addCase(addAsyncUsers.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(addAsyncUsers.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users = Array.isArray(state.users) ? state.users : [];
        state.users.push(action.payload);
      })
      .addCase(addAsyncUsers.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

      // Edit user information
      .addCase(editAsyncUser.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(editAsyncUser.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        if (Array.isArray(state.users)) {
          state.users.findIndex(
            (user) => user.username === action.payload.username
          );
        }
      })
      .addCase(editAsyncUser.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

      // Delete user
      .addCase(deleteAsyncUser.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(deleteAsyncUser.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users = Array.isArray(state.users) ? state.users : [];
        state.users = state.users.filter(
          (user) => user.username !== action.payload.id
        );
      })

      .addCase(deleteAsyncUser.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

      // Fetch laser areas
      .addCase(getLazerAreas.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getLazerAreas.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.AreaLaser = action.payload;
      })
      .addCase(getLazerAreas.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Add new laser area
      .addCase(addLazerArea.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addLazerArea.fulfilled, (state, action) => {
        state.loading = false;
        state.AreaLaser = action.payload;
      })
      .addCase(addLazerArea.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Edit new laser area
      .addCase(editLazerArea.pending, (state) => {
        handleAsyncState(state, {}, "pending");
      })
      .addCase(editLazerArea.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        if (Array.isArray(state.AreaLaser)) {
          const index = state.AreaLaser.findIndex(
            (area) => area.name === action.payload.name
          );
          if (index !== -1) {
            state.AreaLaser[index] = action.payload; // به‌روزرسانی ناحیه موجود
          } else {
            // اگر ناحیه پیدا نشد، ممکن است بخواهید آن را به آرایه اضافه کنید
            state.AreaLaser.push(action.payload);
          }
        }
      })
      .addCase(editLazerArea.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

      // getSettingInformation
      .addCase(getSettingInformation.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled"),
          (state.settingInfo = action.payload);
      })
      .addCase(getSettingInformation.pending, (state, action) => {
        handleAsyncState(state, action, "pending");
      })
      .addCase(getSettingInformation.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // settingAsyncChanging
      .addCase(settingAsyncChanging.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(settingAsyncChanging.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(settingAsyncChanging.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

      // Fetch operator list
      .addCase(getAsyncOperatorList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAsyncOperatorList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getAsyncOperatorList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.operators = action.payload;
      })
      // Fetch getAsyncListDateOperator
      .addCase(getAsyncListDateOperator.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAsyncListDateOperator.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getAsyncListDateOperator.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.operators = action.payload;
      })

      // operatorProgramList
      .addCase(operatorProgramList.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(operatorProgramList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(operatorProgramList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

      // fetchWeekData
      .addCase(fetchWeekData.pending, (state) => {
        handleAsyncState(state, {}, "pending");
      })
      .addCase(fetchWeekData.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.dateRanges = action.payload;
      })
      .addCase(fetchWeekData.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      });
  },
});

export default adminDashboardSlice.reducer;
