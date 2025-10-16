import React from "react";
import { Outlet, useLocation } from "react-router";
import SideBar from "../../../components/common/Sidebar";
import Header from "../../../components/common/Header";

const UserLayout = () => {
  const navs = [
    {
      id: 1,
      name: "Coorinator",
      path: "/",
      title: "Placement Test for IT Coordinator",
    },
    {
      id: 2,
      name: "Officer",
      path: "/officer",
      title: "Placement Test for IT Officer",
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

export default UserLayout;
