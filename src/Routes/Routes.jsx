import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../Layouts/Root";
import ErrorPage from "../Shared/ErrorPages/ErrorPage";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "menu",
                element: <Menu/>
            },
            {
                path: "order/:category",
                element: <Order/>
            }
        ]
    },
]);