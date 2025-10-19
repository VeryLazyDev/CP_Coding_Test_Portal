import { lazy } from "react";
import PageLoader from "../components/core/Pageloader";

export const UserLayout=PageLoader(lazy(()=>import("@/features/user/layout/UserLayout.jsx")));
export const HomePage=PageLoader(lazy(()=>import("@/features/user/pages/Homepage.jsx")));
export const AuthLayout=PageLoader(lazy(()=>import("@/features/auth/layout/AuthLayout.jsx")));
export const LoginPage=PageLoader(lazy(()=>import("@/features/auth/pages/LoginPage.jsx")))
export const AdminLayout=PageLoader(lazy(()=>import("@/features/admin/layout/AdminLayout.jsx")));
export const DashboardPage=PageLoader(lazy(()=>import("@/features/")))