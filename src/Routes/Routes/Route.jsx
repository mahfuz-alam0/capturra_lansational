import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../Layout/Main/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddServise from "../../Pages/AddServis/AddServise";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import EditReview from "../../Pages/Edit/EditReview";
import Home from "../../Pages/Home/Home";
import Allservices from "../../Pages/Home/Services/Allservices";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/all_services',
                element: <PrivateRoute><Allservices /></PrivateRoute>
            },
            {
                path: '/add_review/:id',
                loader: ({ params }) => fetch(`https://capturra-lensational-server.vercel.app/service/${params.id}`),
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://capturra-lensational-server.vercel.app/service/${params.id}`),
                element: <PrivateRoute><Details /></PrivateRoute>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReview /></PrivateRoute>
            },
            {
                path: 'edit/:id',
                loader: ({ params }) => fetch(`https://capturra-lensational-server.vercel.app/my_reviews/${params.id}`),
                element: <PrivateRoute><EditReview /></PrivateRoute>
            },
            {
                path: '/add_service',
                element: <PrivateRoute><AddServise /></PrivateRoute>
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    }
])

export default router;