import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/signin',
                element: <Signin></Signin>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin Route
            {
                path: '/dashboard/adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: '/dashboard/manageuser',
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            // User Route
            {
                path: '/dashboard/userhome',
                element: <UserHome></UserHome>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])