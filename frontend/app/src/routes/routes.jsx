import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, DashboardPage, HomePage, UserLayout } from "../constants/Lazyload";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([
  { path: "/", element: <UserLayout />, children: [
    {element:<HomePage/>,index:true}
  ] },
  {path:"/admin",element:<AdminLayout/>,children:[
    {element:<DashboardPage/>}
  ]},
  ...authRouter
]);

export default router;
