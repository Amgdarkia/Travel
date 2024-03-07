import { createBrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
{
    path:'/Login',
    element:<Login/>
},
{
    path:'/Register',
    element:<RegisterPage/>
}
])