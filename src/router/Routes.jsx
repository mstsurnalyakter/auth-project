import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";


export const router = createBrowserRouter([
{
    path:"/",
    element:<Main/>,
    children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/contact",
            element:<Contact/>
        }
    ]
}
])