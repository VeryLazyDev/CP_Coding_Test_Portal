import { AuthLayout, LoginPage } from "../constants/Lazyload";

export const authRouter=[{
    element:<AuthLayout/>,
    children:[{element:<LoginPage/>,path:"/login"}]
    
}]

