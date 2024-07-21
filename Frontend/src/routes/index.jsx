import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../../middleware/ProtectedRoute";
import Home from "../assets/pages/Home";
import Profile from "../assets/pages/Profile";
import Error from "../assets/pages/Error";
import RegisterUser from "../assets/pages/RegisterUser";
import LoginUser from "../assets/pages/LogInUser";
import DataFetcher from "../assets/pages/Slots";
import Auth from "../assets/pages/Auth";
// import Test from "../assets/pages/Test";
export  const Router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterUser />
    },
    {
        path: "/login",
        element: <LoginUser />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/slot",
        element: <ProtectedRoute>
            <DataFetcher />
        </ProtectedRoute>

    },
    {
        path: "/profile",
        element: <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "*",
        element: <Error />
    },
    // {
    //     path: "/test",
    //     element: <Test />
    // }
]);