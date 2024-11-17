import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";

function DoctorDashboard() {
  const { dToken, dashData, setDashData, getDashData } =
    useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);
  return dashData && <div></div>;
}

export default DoctorDashboard;
