import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    steperState: 0,
  },
  reducers: {
    setSteperState: (state, action) => {
      state.steperState = action.payload;
    },
  },
});

export const { setSteperState } = dashboardSlice.actions;
export default dashboardSlice.reducer;
