import React, { useContext, useState } from "react";

// context.js
const DashboardContext = React.createContext({
  steperState: 0,
  setSteperState: () => {},
});

// Dashboard.js
export const DashboardContextProvider = ({ children }) => {
  const [steperState, setSteperState] = useState(0);
  const value = { steperState, setSteperState };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within DashboardContextProvider"
    );
  }
  return context;
};
