import api from "@/services/apiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/user/list/", {
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
  async (payload, { rejectWithValue }) => {
    try {
      await api.post(
        `/Core/delete/user/`,
        {
          username: payload.id,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return { id: payload.id };
    } catch (error) {
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
      return data;
    } catch (error) {
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

export const fetchWeekData = createAsyncThunk(
  "week/fetchWeekData",
  async (week, { rejectWithValue }) => {
    try {
      const response = await api.get(`/Admin/week/time/${week}/`);

      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getAsyncListDateOperator = createAsyncThunk(
  "admin/getAsyncListDateOperator",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/Admin/operator/program/list/${payload.date_year}/${payload.date_month}/${payload.date_day}/`,
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

export const operatorProgramList = createAsyncThunk(
  "user/operatorProgramList",
  async (payload, { rejectWithValue }) => {
    console.log("payload success", payload);
    try {
      const { data } = await api.post("/Admin/set/operator/program/", payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      console.log("operatorProgramlist success::", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
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

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Core/token/change/password/",
        {
          password: payload.password,
          old_password: payload.old_password,
        },
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

export const getCutomerList = createAsyncThunk(
  "receptionDashboard/getCutomerList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/customer/list/", {
        headers: {
          Authorization: `Bearer ${payload.auth_Admin_token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getDate = createAsyncThunk(
  "adminDashboard/getDate",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Reserve/reserve/list/",
        {
          from_: payload.from,
          to: payload.to,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Admin_token}`,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getClientInformation = createAsyncThunk(
  "adminDashboard/getClientInformation",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Reserve/user/reserve/list/",
        {
          username: payload.username,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Admin_token}`,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
