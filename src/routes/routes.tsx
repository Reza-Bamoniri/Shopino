import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUS from "../pages/AboutUS";


const router = createBrowserRouter([
{
    path: "/",
    element: <MainLayout/>,
    children:[
        {index: true, element: <Home/>},
        { path: "about-us", element: <AboutUS/> },
    ]
}
]);

export default router;