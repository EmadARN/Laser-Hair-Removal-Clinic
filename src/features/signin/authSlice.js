import api from "@/services/apiService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
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
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAsyncNumber.fulfilled, (state, action) => {
        state.phone_number = action.payload.phone_number;
        state.loading = false;
        state.error = null;
      })
      .addCase(postAsyncNumber.pending, (state) => {
        state.loading = true;
        state.phone_number = "";
        state.error = null;
      })
      .addCase(postAsyncNumber.rejected, (state, action) => {
        state.loading = false;
        state.phone_number = "";
        state.error = action.payload || "Failed to send phone number.";
      })
      .addCase(postAsyncCode.fulfilled, (state, action) => {
        state.code = action.payload.code;
        state.phone_number = action.payload.phone_number;
        state.token = action.payload.token; // ذخیره توکن در state
        state.loading = false;
        state.error = null;
      })
      .addCase(postAsyncCode.pending, (state) => {
        state.loading = true;
        state.code = "";
        state.phone_number = "";
        state.error = null;
      })
      .addCase(postAsyncCode.rejected, (state, action) => {
        state.loading = false;
        state.code = "";
        state.phone_number = "";
        state.error = action.payload || "Failed to verify code.";
      });
  },
});
export const { setTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;
// typeof window !== "undefined" ? localStorage.getItem("auth_token") : null, // بررسی محیط مرورگر
