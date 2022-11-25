import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Bikecatagory from "../../Pages/Bikecatagory/Bikecatagory/Bikecatagory";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/Blog',
            element: <Blog></Blog>
        },
        {
            path: '/catagory',
            element: <Bikecatagory></Bikecatagory>
        }
      ]

    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])

export default router;