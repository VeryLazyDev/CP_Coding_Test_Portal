import React from "react";
import { Outlet } from "react-router-dom";
import {Toaster} from "react-hot-toast"

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen ">
        <div><Toaster position="top-center" reverseOrder={false} /></div>
        
      <Outlet />
    </div>
  );
};

export default AuthLayout;
