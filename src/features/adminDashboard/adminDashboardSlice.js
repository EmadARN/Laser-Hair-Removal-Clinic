import { createSlice } from "@reduxjs/toolkit";
import {
  addAsyncUsers,
  addLazerArea,
  changePassword,
  deleteAsyncUser,
  editAsyncUser,
  editLazerArea,
  fetchWeekData,
  getAsyncListDateOperator,
  getAsyncOperatorList,
  getAsyncUserName,
  getAsyncUsersList,
  getCutomerList,
  getDate,
  getLazerAreas,
  getSettingInformation,
  operatorProgramList,
  postAsyncLogin,
  settingAsyncChanging,
} from "./adminThunks";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = "";
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

// Initial State
const initialState = {
  loading: false,
  error: "",
  operators: [],
  operatorsDate: [],
  users: [],
  AreaLaser: [],
  settingInfo: [],
  dateRanges: [],
  userNames: "",
  dataRangeStatus: false,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  userType: null,
  customerListAdmin: [],
  dateReserve: null,
};

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //User login
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
        state.operatorsDate = action.payload;
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
        state.dataRangeStatus = true;
      })
      .addCase(fetchWeekData.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
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
      })
      //changePassword
      .addCase(changePassword.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(changePassword.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(changePassword.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      // fetch customerList
      .addCase(getCutomerList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCutomerList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getCutomerList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.customerListAdmin = action.payload;
      })
      // getDate
      .addCase(getDate.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getDate.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.dateReserve = action.payload;
        
      })
      .addCase(getDate.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )

  },
});
export const { setCurrentRange } = adminDashboardSlice.actions;

export default adminDashboardSlice.reducer;
