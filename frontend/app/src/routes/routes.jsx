import { createBrowserRouter } from "react-router-dom";
import { HomePage, UserLayout } from "../constants/Lazyload";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([
  { path: "/", element: <UserLayout />, children: [
    {element:<HomePage/>,index:true}
  ] },
  ...authRouter
]);

export default router;
