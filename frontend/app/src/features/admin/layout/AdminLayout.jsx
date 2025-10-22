import React from "react";
import { Outlet, useLocation } from "react-router";
import SideBar from "../../../components/common/Sidebar";
import Header from "../../../components/common/Header";
import {
  ChartColumn,
  FileQuestionMark,
  FileText,
  Trophy,
  Users2,
} from "lucide-react";

const AdminLayout = () => {
  const navs = [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin",
      title: "Dashboard",
      icon: <ChartColumn />,
    },
    {
      id: 2,
      name: "Users",
      path: "/admin/users",
      title: "Users",
      icon: <Users2 />,
    },
    {
      id: 3,
      name: "Questions",
      path: "/admin/questions",
      title: "Questions",
      icon: <FileQuestionMark />,
    },
    {
      id: 4,
      name: "Test",
      path: "/admin/test",
      title: "Test",
      icon: <FileText />,
    },
    {
      id: 5,
      name: "Result",
      path: "/admin/result",
      title: "Result",
      icon: <Trophy />,
    },
  ];

  const location = useLocation();
  const currentRoute = navs.find((r) => r.path === location.pathname);
  const userName = localStorage.getItem("user");

  return (
    <div className="flex h-full">
      <div className="flex-none">
        <SideBar navs={navs} team={userName} />
      </div>

      <div className="flex-1 flex flex-col w-full">
        <header>
          <Header title={currentRoute?.title || "Dashboard"} />
        </header>
        <div className="w-full h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
