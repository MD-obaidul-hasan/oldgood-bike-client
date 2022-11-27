import { createBrowserRouter } from "react-router-dom";
import Dashbordlayout from "../../Layout/Dashbordlayout";
import Main from "../../Layout/Main";
import Bikecatagory from "../../Pages/Bikecatagory/Bikecatagory/Bikecatagory";
import Blog from "../../Pages/Blog/Blog";
// import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Myoderbike from "../../Pages/Dashboard/Myoderbike/Myoderbike"
import Not from "../../Pages/Not/Not";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers"
// import AllUsers from "../../Pages/Dashboard/AllUsers/AllUSERS.JS";


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
        },
        {
            path: '/catagory/:id',
            element: <Bikecatagory></Bikecatagory>
        }
      ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashbordlayout></Dashbordlayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Myoderbike></Myoderbike>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
        ]
    },
    {
        path: '*', 
        element: <Not></Not>
    }

])

export default router;