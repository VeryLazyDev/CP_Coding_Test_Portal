import { lazy } from "react";
import PageLoader from "../components/core/Pageloader";

export const UserLayout=PageLoader(lazy(()=>import("@/features/user/layout/UserLayout.jsx")));
export const HomePage=PageLoader(lazy(()=>import("@/features/user/pages/Homepage.jsx")))