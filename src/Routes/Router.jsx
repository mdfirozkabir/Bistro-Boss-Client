import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "./Shared/ErrorPages/ErrorPage";
import Root from "../Layouts/Root";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
]);