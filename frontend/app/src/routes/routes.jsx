import { createBrowserRouter } from "react-router-dom";
import {
  AdminLayout,
  DashboardPage,
  HomePage,
  UserLayout,
} from "../constants/Lazyload";
import { authRouter } from "./authRouter";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute allowedRoles={["user", "Admin"]} />,
    children: [
      {
        path: "/",
        element: <UserLayout />,
        children: [{ element: <HomePage />, index: true }],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={["Admin"]} />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [{ element: <DashboardPage /> }],
      },
    ],
  },
  ...authRouter,
]);

export default router;
