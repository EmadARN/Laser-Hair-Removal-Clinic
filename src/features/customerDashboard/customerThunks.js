import api from "@/services/apiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postCustomerInformation = createAsyncThunk(
  "customerDashboard/postCustomerInformation",
  async (payload, { rejectWithValue }) => {
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
      return data;
    } catch (error) {}
  }
);
export const EditCustomerInformation = createAsyncThunk(
  "customerDashboard/EditCustomerInformation",
  async (payload, { rejectWithValue }) => {
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
      return data;
    } catch (error) {}
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
      return data;
    } catch (error) {}
  }
);
export const postLazerAreaList = createAsyncThunk(
  "customerDashboard/postLazerAreaList",
  async (payload, { rejectWithValue }) => {
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
      return data;
    } catch (error) {}
  }
);
export const getreserveInformation = createAsyncThunk(
  "customerDashboard/getreserveInformation",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/Reserve/reserve/information/${payload.reserveId}/`,
        {
          headers: {
            Authorization: `Bearer ${payload.tokenAuth}`,
          },
        }
      );
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
      return data;
    } catch (error) {
      console.log("error payload getTimeList", error);
    }
  }
);

export const postAddTime = createAsyncThunk(
  "customerDashboard/postAddTime",
  async (payload, { rejectWithValue }) => {
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
      return data;
    } catch (error) {
      console.log("error payload postAddTime", error);
    }
  }
);

export const confirmInfo = createAsyncThunk(
  "customerDashboard/confirmInfo",
  async (payload, { rejectWithValue }) => {
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

      return data;
    } catch (error) {
      console.log("error payload confirm info", error);
    }
  }
);
export const getCutomerList = createAsyncThunk(
  "customer/getCutomerList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/customer/list/", {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("customer list error", error);
    }
  }
);

export const getAsyncUserName = createAsyncThunk(
  "customer/getAsyncUserName",
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

export const getSessionRecords = createAsyncThunk(
  "customer/getSessionRecords",
  async ({ username, token, rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Reserve/user/reserve/list/",
        {
          username,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log("session error", error);
    }
  }
);
export const cancelReserve = createAsyncThunk(
  "customer/cancelReserve",
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
            Authorization: `Bearer ${payload.tokenAuth}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
