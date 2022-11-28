import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllUsers from "../Pages/AllUsers/AllUsesrs";
import Blogs from "../Pages/Blogs/Blogs";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SubCategories from "../Pages/SubCategories/SubCategories";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Privetroute from "./PrivateRoute/PrivateRoute";

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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allProducts/:id',
                element: <SubCategories></SubCategories>,
                loader: ({ params }) => fetch(`http://localhost:5000/allProducts/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>

            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers> </AdminRoute>
            },
            {
                path: '/dashboard/allProducts/:email',
                element: <MyProducts></MyProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/allProducts/${params.email}`)
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
        ]
    }
])
export default router;