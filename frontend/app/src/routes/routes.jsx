import { createBrowserRouter } from "react-router-dom";
import { HomePage, UserLayout } from "../constants/Lazyload";

const router = createBrowserRouter([
  { path: "/", element: <UserLayout />, children: [
    {element:<HomePage/>,index:true}
  ] },
]);

export default router;
