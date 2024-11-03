import api from "@/services/apiService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = "";
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

export const postAsyncNumber = createAsyncThunk(
  "signin/postAsyncNumber",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/Core/login/customer/", {
        phone_number: payload.phone_number,
      });

      return { phone_number: payload.phone_number, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const postAsyncCode = createAsyncThunk(
  "signin/postAsyncCode",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/Core/login/prove/code/",
        {
          phone_number: payload.phone_number,
          code: payload.code,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ADMIN & RECEPTION SIGNIN
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

const authSlice = createSlice({
  name: "signin",
  initialState: {
    loading: false,
    phone_number: "",
    code: "",
    error: null,
    // token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAsyncNumber.pending, (state) => {
        handleAsyncState(state, {}, "pending");
        state.phone_number = "";
      })
      .addCase(postAsyncNumber.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.phone_number = action.payload.phone_number;
      })
      .addCase(postAsyncNumber.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
        state.phone_number = "";
      })

      //post postAsyncCode
      .addCase(postAsyncCode.pending, (state) => {
        handleAsyncState(state, {}, "pending");
        state.code = "";
        state.phone_number = "";
      })
      .addCase(postAsyncCode.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.code = action.payload.code;
        state.phone_number = action.payload.phone_number;
        // state.token = action.payload.token; // ذخیره توکن در state
        // localStorage.setItem("token", action.payload.token);
      })
      .addCase(postAsyncCode.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
        state.code = "";
        state.phone_number = "";
      })

      // ADMIN & RECEPTION SIGNIN
      .addCase(postAsyncLogin.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(postAsyncLogin.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.userType = action.payload.user_type;
      })
      .addCase(postAsyncLogin.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      );
  },
});
export default authSlice.reducer;
// typeof window !== "undefined" ? localStorage.getItem("auth_token") : null, // بررسی محیط مرورگر
