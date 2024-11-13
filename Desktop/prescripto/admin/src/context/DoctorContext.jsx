import { createContext, useState } from "react";

export const DoctorContext = createContext();

function DoctorContextProvider({ children }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
  );

  const value = {
    dToken,
    setDToken,
    backendUrl,
  };

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
}

export default DoctorContextProvider;
