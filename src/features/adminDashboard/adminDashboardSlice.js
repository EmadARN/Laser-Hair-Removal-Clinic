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
export const getAsyncOpratorList = createAsyncThunk(
  "admin/getAsyncOpratorList",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().adminDashboard; // دریافت توکن از وضعیت
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

export const addAsyncUsers = createAsyncThunk(
  "user/addAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Core/signup/admin/", payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      alert("User Created Successfully");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
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
      alert("arealazer Created Successfully");
      console.log(data);

      return data;
    } catch (error) {
      console.log("addlzerarea error", error);

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
      console.log("getLazerAreA", data);
      return data;
    } catch (error) {
      console.log("get lazer area error", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  error: "",
  users: [],
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null, // توکن برای ذخیره در حالت
  userType: null,
  AreaLaser: [],
};

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAsyncLogin.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(postAsyncLogin.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users.push(action.payload);
        state.token = action.payload.token; // ذخیره توکن

        // Save token to localStorage if needed
        localStorage.setItem("token", action.payload.token);
        state.userType = action.payload.user_type;
      })
      .addCase(postAsyncLogin.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addAsyncUsers.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(addAsyncUsers.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users.push(action.payload);
      })
      .addCase(addAsyncUsers.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getAsyncOpratorList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAsyncOpratorList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addLazerArea.fulfilled, (state, action) => {
        state.AreaLaser.push(action.payload);
      })
      .addCase(addLazerArea.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })
      .addCase(getLazerAreas.pending, (state) => {
        handleAsyncState, (state, {}, "pending");
      })
      .addCase(getLazerAreas.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.AreaLaser.push(action.payload);
      })
      .addCase(getLazerAreas.rejected, (state) => {
        handleAsyncState(state, {}, "rejected");
      });
  },
});

export default adminDashboardSlice.reducer;
