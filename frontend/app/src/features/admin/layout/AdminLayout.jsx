import React from "react";
import { Outlet, useLocation } from "react-router";
import SideBar from "../../../components/common/Sidebar";
import Header from "../../../components/common/Header";


const AdminLayout = () => {
  const navs = [
  {
      id: 1,
      name: "Dashboard",
      path: "/Dashboard",
      title: "Dashboard",
    },


    {
      id: 2,
      name: "Coorinator",
      path: "/Questions",
      title: "Create Questions for placement",
    },
    {
      id: 3,
      name: "User",
      path: "/ueses",
      title: "ALL USERS",
    },
  ];
  const location = useLocation();
  const cuurentRoute = navs.find((r) => (r.path = location.pathname));

  return (
    <div className="flex h-full ">
      <div className="flex-none  ">
        <SideBar navs={navs} team={"AMS"} />
      </div>

      <div className="flex-1 flex flex-col w-full ">
        <header className="">
          <Header title={cuurentRoute.title} />
        </header>
        <div className="w-full  h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default AdminLayout