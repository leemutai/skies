import React, { useState } from "react";
import { assets } from "../assets/assets";

const login = () => {
  const [state, setState] = useState("Admin");

  return (
    <form>
      <div>
        <p>
          <span>{state}</span>Login
        </p>
      </div>
    </form>
  );
};

export default login;
