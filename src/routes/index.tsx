import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// import AccountLayout from "../layouts/account";
// import DashboardContainer from "../pages/dashboard/DashboardContainer";
// import Dashboard from "../pages/dashboard";
// import TrendingNewsDetail from "../pages/TrendingNews/TrendingNewsDetaiil";
// import Signout from "../pages/signout";
// import ChangePassword from "../layouts/account/ChangePassword";
import NotFound from "../pages/Notfound";

const Signin = React.lazy(() => import("../pages/signin"));
const Signup = React.lazy(() => import("../pages/signup"));
const Dashboard = React.lazy(() => import("../pages/dashboard"));
const AccountLayout = React.lazy(() => import("../layouts/account"));
const Signout = React.lazy(() => import("../pages/signout"));
const TrendingNewsDetail = React.lazy(() => import("../pages/TrendingNews/TrendingNewsDetaiil"));
const ChangePassword = React.lazy(() => import("../layouts/account/ChangePassword"));
const DashboardContainer = React.lazy(() => import("../pages/dashboard/DashboardContainer"));

// import Notfound from "../pages/Notfound";
// import ProjectContainer from "../pages/projects/ProjectContainer";
// import NewComment from "../pages/comments/NewComment";
// import CommentList from "../pages/comments/CommentList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/account/dashboard" replace />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    },

    {
        path: "/logout",
        element: <Signout />
    },
    {
        path: "/changepassword",
        element: <ChangePassword />,
    },
    {
        path: "/notfound",
        element: <NotFound />
    },

    // Protected Routes
    {
        path: "account",
        element: (
            <AccountLayout />
            // <ProtectedRoute>
            //     <AccountLayout />
            // </ProtectedRoute>
        ),
        ErrorBoundary: () => <>Failed to load the page</>,
        children: [
            {
                index: true,
                element: <Navigate to="/account/dashboard" replace />
            },
            {
                path: "dashboard",
                element: <DashboardContainer />,
                children: [
                    { index: true, element: <Dashboard /> },
                    {
                        path: ":articleID",
                        element: <TrendingNewsDetail />,
                    },

                ]
            },

        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },

]);
export default router;