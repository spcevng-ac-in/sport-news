import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoute";
import DashboardContainer from "../pages/dashboard/DashboardContainer";
import Dashboard from "../pages/dashboard";
import TrendingNewsDetail from "../pages/TrendingNews/TrendingNewsDetaiil";
import { Logout } from "@mui/icons-material";
import Signout from "../pages/signout";

const Signin = React.lazy(() => import("../pages/signin"));
const Signup = React.lazy(() => import("../pages/signup"));
// const Projects = React.lazy(() => import("../pages/projects"));
// const Members = React.lazy(() => import("../pages/members"));
// const Logout = React.lazy(() => import("../pages/logout"));
// const ProjectDetails = React.lazy(() => import("../pages/project_details"));
// const NewTask = React.lazy(() => import("../pages/tasks/NewTask"));
// const TaskDetailsContainer = React.lazy(
//   () => import("../pages/tasks/TaskDetailsContainer")
// );

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
    // {
    //     path: "/notfound",
    //     element: <Notfound />
    // },

    // Protected Routes
    {
        path: "account",
        element: (
            <ProtectedRoute>
                <AccountLayout />
            </ProtectedRoute>
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
                    }
                ]
            },

        ],
    },

]);
export default router;