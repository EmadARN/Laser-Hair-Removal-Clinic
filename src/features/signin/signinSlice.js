import api from "@/services/apiService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postAsyncNumber = createAsyncThunk(
  "signin/postAsyncNumber",
  async (payload, { rejectWithValue }) => {
    try {
      const respons = await api.post("/Core/login/customer/", {
        phone_number: payload.phone_number,
      });
      return respons.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const postAsyncCode = createAsyncThunk(
  "signin/postAsyncCode",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/Core/login/prove/code/", {
        phone_number: payload.phone_number,
        code: payload.code,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const todoSlice = createSlice({
  name: "signin",
  initialState: {
    loading: false,
    phone_number: "",
    code: "",
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(postAsyncNumber.fulfilled, (state, action) => {
        return { phone_number: action.payload, loading: false };
      })
      .addCase(postAsyncNumber.pending, (state, action) => {
        return { loading: true, phone_number: "" };
      })
      .addCase(postAsyncNumber.rejected, (state, action) => {
        return {
          loading: false,
          phone_number: "",
          error: action.error.message,
        };
      })
      .addCase(postAsyncCode.fulfilled, (state, action) => {
        return {
          code: action.payload,
          phone_number: action.payload,
          loading: false,
        };
      })
      .addCase(postAsyncCode.pending, (state, action) => {
        return { loading: true, code: "", phone_number: "" };
      })
      .addCase(postAsyncCode.rejected, (state, action) => {
        return {
          loading: false,
          code: "",
          phone_number: "",
          error: action.error.message,
        };
      });
  },
});

export default todoSlice.reducer;
